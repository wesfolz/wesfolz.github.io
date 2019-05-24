import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import { SectionHeader, HeaderImg } from 'components/info-sections/SectionStyles';

const ItemContainer = styled.div`
    cursor: pointer;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    ${props => props.left ?
        css`right: 0;` :
        css`left: 0;`
    }
    border-radius: 50%;
`;

const Overlay = styled(SectionHeader)`
    position: absolute;
    width: ${props => `${props.imageSize}px`};
    height: ${props => `${props.imageSize}px`};
    border-radius: 50%;
    p {
        opacity: 0;
        transition: opacity 0.3s;
    }
    &:hover, &.zoomed {
        /* box-shadow: 0px 0px 160px white; */
        border-radius: ${props => `${3 / props.scale}px`};
        transform: scale(2);
    }
    &.expanded {
        width: 100vw;
        height: 400px;
        border-radius: ${props => `${3 / props.scale}px`};
        transform: scale(1);
    }

    &:hover, &.zoomed, &.expanded {
        p {
            opacity: 1;
            transition: opacity 0.3s;
            z-index: 2;
        }
    }
`;

export default function TimelineEvent(props) {

    const [zoomed, setZoomed] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [overlayClass, setOverlayClass] = useState(null);
    const itemRef = useRef(null);

    useEffect(() => {
        if (props.collapse) {
            setTimeout(() => {
                setOverlayClass(null);
            }, props.transitionTime * 1000);
            setZoomed(false);
        }
    }, [props.collapse])

    const selectItem = () => {
        setOverlayClass('zoomed');
        setTimeout(() => {
            setZoomed(true);
            setOverlayClass('expanded');
        }, props.transitionTime * 1000);

        props.selectItem(itemRef, props.eventId);
    };

    return (
        <ItemContainer
            {...props}>
            <Overlay
                ref={itemRef}
                onClick={selectItem}
                {...props}
                className={overlayClass}>
                <p>{props.title}</p>
                <HeaderImg
                    image={props.image}
                    color={props.color}
                    imageSize={props.imageSize / 1.5}>
                </HeaderImg>
                <p>{props.subtitle}</p>
            </Overlay>
        </ItemContainer>
    );
}
