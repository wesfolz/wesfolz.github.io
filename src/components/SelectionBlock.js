import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components/macro';
import TypeWriter from 'components/animated/TypeWriter';
import SelectableButton from 'components/buttons/SelectableButton';
import useKeySelect from 'hooks/useKeySelect';

const ButtonLayout = styled(SelectableButton)`
    margin: 16px 0px;
    opacity: ${props => props.show ? 1 : 0};
    transform: ${props => props.show ? 'translateY(0)' : 'translateY(-10px)'};
    transition: opacity 0.25s, transform 0.25s;
`;

const SectionTitle = styled(TypeWriter)`
    font-size: 70px;
    font-weight: bold;
    @media(max-width: 768px) {
        font-size: 50px;
    }
`;

const SectionSubTitle = styled(TypeWriter)`
    font-size: 40px;
    padding-bottom: 8px;
    @media(max-width: 768px) {
        font-size: 30px;
    }
`;

const SectionText = styled.section`
    color: white;
    font-size: 16px;
    line-height: 24px;
    opacity: ${props => props.show ? 1 : 0};
    transform: ${props => props.show ? 'translateY(0)' : 'translateY(-10px)'};
    transition: opacity 0.25s, transform 0.25s;
    @media(max-width: 768px) {
        font-size: 14px;
    }
    p {
        font-family: "Fira Code";
    }
`;

const SelectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: "Fira Code";
    max-width: 600px;
    opacity: ${props => props.slideOut || props.shrink ? 0 : 1};
    transition: ${props => `opacity ${props.transitionTime}s, transform ${props.transitionTime}s`};
    margin: 32px 0px;
    ${props => props.shrink ?
        css`transform: scale(0);` :
        css``
    };
    ${props => props.slideOut ?
        css`transform: translateY(-100px);` :
        css``
    };
`;

const DELAY = 500;

export default function SelectionBlock({ selectItem, titleText, subtitleText, sectionText, selections, shrink, slideOut, transitionTime }) {

    const [titleComplete, setTitleComplete] = useState(false);
    const [subtitleComplete, setSubtitleComplete] = useState(false);
    const [sectionTextComplete, setSectionTextComplete] = useState(false);
    const [indexLoading, setIndexLoading] = useState(0);

    const [selectedIndex, setSelectedIndex] = useKeySelect({
        itemCount: selections.length,
        selectItem: () => { selectItem(selectedIndex) }
    });

    useEffect(() => {
        //reset the animations when the content changes
        setTitleComplete(titleText == null);
        setSubtitleComplete(subtitleText == null);
        setSectionTextComplete(sectionText == null);
        setIndexLoading(0);
        if (!titleText && !subtitleText && sectionText) {
            waitForSectionText();
        }
    }, [titleText, subtitleText, sectionText, selections]);

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
                    onClick={() => selectItem(i)}
                    color={selection.color}
                    backgroundColor={selection.backgroundColor}>
                    {selection.text}
                </ButtonLayout>
            );
        });
    };

    const completeTitle = () => {
        setTitleComplete(true);
        if (!subtitleText) {
            completeSubtitle();
        }
    };

    const completeSubtitle = () => {
        setSubtitleComplete(true);
        waitForSectionText();
    };

    return (
        <SelectionContainer shrink={shrink} slideOut={slideOut} transitionTime={transitionTime}>
            <SectionTitle text={titleText}
                onComplete={() => setTimeout(() => { completeTitle() }, DELAY)}
                color='white'
                delay={DELAY}
                start={true}>
            </SectionTitle>
            <SectionSubTitle text={subtitleText}
                onComplete={() => setTimeout(() => { completeSubtitle() }, DELAY)}
                color='white'
                delay={DELAY}
                start={titleComplete}>
            </SectionSubTitle>
            {sectionText ? <SectionText show={titleComplete && subtitleComplete}>
                {sectionText}
            </SectionText>
                : null}
            {selectionElements()}
        </SelectionContainer>
    );
}
