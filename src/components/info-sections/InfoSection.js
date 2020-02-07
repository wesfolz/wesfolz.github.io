import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SelectableButton from 'components/buttons/SelectableButton';
import Colors from 'styles/Colors';
import { SectionHeader } from 'components/info-sections/SectionStyles';

const TRANSITION_TIME = 0.5;
const DELAY_TIME = 0.25;

const SectionWrapper = styled.article`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow-x: hidden;
    margin-bottom: 16px;
`;

const ContentWrapper = styled.div`
    background-color: ${Colors.offWhite};
    opacity: ${props => props.shrink ? 1 : 0};
    overflow: hidden;
    transition: opacity ${`${TRANSITION_TIME}s ease, padding ${TRANSITION_TIME}s ease`};
`;

const Content = styled.div`
    padding: ${props => props.shrink ? '0px 40px 40px' : '0px 40px'};
    margin: 0 auto;
    max-width: 1200px;
    transition: padding ${`${TRANSITION_TIME}s ease`};
`

const CloseButton = styled(SelectableButton)`
    position: fixed;
    z-index: 1000;
    top: 8px;
    right: 8px;
    border-radius: 50%;
    padding: 8px 11px;
    background-color: transparent;
    color: ${props => props.color || 'black'};
`;

export default function InfoSection(props) {
    const [shrink, setShrink] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShrink(true);
        }, DELAY_TIME * 1000);
    }, []);

    const closeSection = () => {
        setShrink(false);
        window.scroll({top: 0, left: 0, behavior: 'smooth' })
        props.zoomOut && props.zoomOut();
    };

    return (
        <SectionWrapper shrink={shrink} imageSize={props.imageSize}>
            <CloseButton color={props.exitColor} onClick={closeSection}>
                <FontAwesomeIcon icon="times" size="lg"></FontAwesomeIcon>
            </CloseButton>
            <SectionHeader color={'transparent'} />
            <ContentWrapper shrink={shrink}>
                <Content shrink={shrink}>
                    {props.children}
                </Content>
            </ContentWrapper>
        </SectionWrapper>
    );
}
