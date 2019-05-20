import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SelectableButton from 'components/buttons/SelectableButton';
import Colors from 'styles/Colors';

const SectionWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background-color: ${Colors.offWhite};
`;

const Header = styled.div`
    background: ${props => props.backgroundColor} url(${props => props.backgroundImage}) no-repeat center;
    background-size: contain;
    width: 100%;
    height: ${props => props.shrink ? '400px' : '100vh'};
    @media(max-width: 768px) {
        height: ${props => props.shrink ? '240px' : '100vh'};
    }
    top: 0;
    left: 0;
    transition: height 1.0s ease;
`;

const ContentWrapper = styled.div`
    height: ${props => props.shrink ? '100%' : 0};
    transform: scale(${props => props.shrink ? 1 : 0});
    transition: height 1.0 ease, transform 1.0s ease;
    padding: 0px 40px 40px;
    margin: 0 auto;
    max-width: 1200px;
    /* display: ${props => props.shrink ? 'block' : 'none'}; */
`;

const CloseButton = styled(SelectableButton)`
    position: fixed;
    z-index: 1;
    top: 20px;
    right: 20px;
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
        }, 250);
    }, []);

    const closeSection = () => {
        setShrink(false);
        setTimeout(() => {
            props.exit();
        }, 1250);
    };

    return (
        <SectionWrapper>
            <CloseButton color={props.exitColor} onClick={closeSection}>
                <FontAwesomeIcon icon="times" size="lg"></FontAwesomeIcon>
            </CloseButton>
            <Header
                backgroundImage={props.backgroundImage}
                backgroundColor={props.backgroundColor}
                shrink={shrink}>
            </Header>
            <ContentWrapper shrink={shrink}>
                {props.children}
            </ContentWrapper>
        </SectionWrapper>
    );
}
