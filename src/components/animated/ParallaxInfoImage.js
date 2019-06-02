import React from 'react';
import styled from 'styled-components';

import ParallaxImage from 'components/animated/ParallaxImage';
import ParallaxInfoContainer from 'components/animated/ParallaxInfoContainer';
import UnderlineButton from 'components/buttons/UnderlineButton';

const Overlay = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${props => `${props.overlayColor}40` || '#00000040'};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    opacity: 0;
    transition: opacity 0.3s;
    &:hover {
        opacity: 1;
        transition: opacity 0.3s;
    }
`;

export default function ParallaxInfoImage(props) {
    return (
        <ParallaxInfoContainer>
            <ParallaxImage {...props}></ParallaxImage>
            <Overlay overlayColor={props.overlayColor}>
                <UnderlineButton color={props.overlayColor}>
                    <a href={props.href}>Learn More</a>
                </UnderlineButton>
            </Overlay>
        </ParallaxInfoContainer>
    );
}
