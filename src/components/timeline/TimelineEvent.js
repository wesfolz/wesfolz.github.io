import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components/macro';

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
    /* transition: width 0.3s ease-in-out, height 0.3s ease-in-out, transform 0.3s ease-in-out, border-radius 0.3s ease-in-out, box-shadow 0.3s ease-in-out; */
    transition: transform 0.3s ease-in-out;
    position: fixed;
    border-radius: 50%;
    width: ${props => `${props.imageSize}px`};
    height: ${props => `${props.imageSize}px`};
    p {
        opacity: 0;
        transition: opacity 0.3s;
    }
    &::before {
        content: '';
        transition: transform 0.3s ease-in-out, border-radius 0.3s ease-in-out;
        border-radius: 50%;
        background-color: ${props => props.color};
        position: absolute;
        width: ${props => `${props.imageSize}px`};
        height: ${props => `${props.imageSize}px`};
    }
    &:hover, &.zoomed {
        transform: scale(2);
        z-index: 2;
        @media(max-width: 500px) {
            transform: scale(1.75);
        }
        @media(max-width: 400px) {
            transform: scale(1.25);
        }

        &::before {
            box-shadow: ${props => ` 0px 0px ${16 / props.scale}px white`};
            border-radius: ${props => `${8 / props.scale}px`};
        }
    }
    &.expanded, &.invisible {
        &::before {
            transform: scaleX(6);
            border-radius: 0;
        }
        z-index: 2;
        transform: scale(1);
        @media(max-width: 768px), (max-height: 850px) {
            height: 240px;
        }
    }

    &.invisible {
        opacity: 0;
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
    const [overlayClass, setOverlayClass] = useState(null);
    const itemRef = useRef(null);

    useEffect(() => {
        if (props.collapse) {
            if (overlayClass) {
                setOverlayClass('expanded');
            }
            setTimeout(() => {
                setOverlayClass(null);
            }, props.transitionTime * 1000);
        }
    }, [props.collapse]);

    const selectItem = () => {
        setOverlayClass('zoomed');
        setTimeout(() => {
            setOverlayClass('expanded');
            // setTimeout(() => {
            //     setOverlayClass('invisible');
            // }, 500)
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
                <p>{props.eventTitle}</p>
                <HeaderImg
                    image={props.image}
                    color={props.color}
                    imageSize={props.imageSize / 1.5}>
                </HeaderImg>
                <p>{props.eventSubtitle}</p>
            </Overlay>
        </ItemContainer>
    );
}
