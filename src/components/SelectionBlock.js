import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import TypeWriter from 'components/TypeWriter';
import SelectableButton from 'components/buttons/SelectableButton';
import useKeySelect from 'hooks/useKeySelect';

const ButtonLayout = styled(SelectableButton)`
    margin: 16px 0px;
    opacity: ${props => props.show ? 1 : 0};
    transform: ${props => props.show ? 'translateY(0)' : 'translateY(-10px)'};
    transition: opacity 0.25s, transform 0.25s;
`;

const SectionTitle = styled(TypeWriter)`
    font-size: 72px;
    font-weight: bold;
`;

const SectionSubTitle = styled(TypeWriter)`
    font-size: 40px;
    padding-bottom: 8px;
`;

const SectionText = styled.p`
    color: white;
    font-size: 1rem;
    line-height: 24px;
    opacity: ${props => props.show ? 1 : 0};
    transform: ${props => props.show ? 'translateY(0)' : 'translateY(-10px)'};
    transition: opacity 0.25s, transform 0.25s;
`;

const SelectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* width: 100%; */
    max-width: 600px;
    opacity: ${props => props.slideOut || props.shrink ? 0 : 1};
    transition: opacity 1.0s, transform 1.0s;
    ${props => props.shrink ?
        css`transform: scale(0);` :
        css``
    };
    ${props => props.slideOut ?
        css`transform: translateY(-100px);` :
        css``
    };
`;

const DELAY = 250;

export default function SelectionBlock({ selectItem, titleText, subtitleText, sectionText, selections, history, shrink, slideOut }) {

    const [titleComplete, setTitleComplete] = useState(false);
    const [subtitleComplete, setSubtitleComplete] = useState(false);
    const [sectionTextComplete, setSectionTextComplete] = useState(false);
    const [indexLoading, setIndexLoading] = useState(0);

    const [selectedIndex, setSelectedIndex] = useKeySelect({
        itemCount: selections.length,
        selectItem: () => { selectItem(selectedIndex) }
    });

    useEffect(() => {
        //reset the animations when the title changes
        setTitleComplete(titleText == null);
        setSubtitleComplete(subtitleText == null);
        setSectionTextComplete(sectionText == null);
        setIndexLoading(0);
    }, [titleText, subtitleText, sectionText, selections]);

    const buttonClick = (index) => {
        selectItem(index, history);
    };

    const waitForSectionText = () => {
        if (sectionText) {
            setTimeout(() => {
                setSectionTextComplete(true);
            }, DELAY);
        } else {
            setSectionTextComplete(true);
        }
    };

    const selectionElements = () => {
        if (titleComplete && subtitleComplete && sectionTextComplete && indexLoading < selections.length) {
            setTimeout(() => {
                setIndexLoading(indexLoading + 1);
            }, 100);
        }

        return selections.map((selection, i) => {
            return (
                <ButtonLayout key={selection.text}
                    className={i === selectedIndex ? 'selected' : null}
                    show={i <= indexLoading && titleComplete && subtitleComplete && sectionTextComplete}
                    onClick={() => buttonClick(i)}
                    color={selection.color}
                    backgroundColor={selection.backgroundColor}>
                    {selection.text}
                </ButtonLayout>
            );
        });
    };

    return (
        <SelectionContainer shrink={shrink} slideOut={slideOut}>
            <SectionTitle text={titleText}
                onComplete={() => setTimeout(() => { setTitleComplete(true) }, DELAY)}
                color='white'
                delay={DELAY * 2}
                start={true}>
            </SectionTitle>
            <SectionSubTitle text={subtitleText}
                onComplete={() => setTimeout(() => { setSubtitleComplete(true); waitForSectionText(); }, DELAY)}
                color='white'
                delay={DELAY * 2}
                start={titleComplete}>
            </SectionSubTitle>
            {sectionText ? <SectionText show={subtitleComplete}>
                {sectionText}
            </SectionText> 
            : null }
            {selectionElements()}
        </SelectionContainer>
    );
}
