import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const INITIAL_SIZE = 80;

const ItemContainer = styled.div`
    position: relative;
    top: 0;
    ${props => props.left ?
        css`right: 0;` :
        css`left: 0;`
    }
    width: 100vw;
    height: 100vh;
    transform: scale(1);
    &::before {
        content: '';
        position: absolute;
        background: ${props => props.color} url(${props => props.image}) no-repeat center;
        background-size: contain;
        width: 100%;
        height: 100%;
        /* opacity: 0.5; */
        transform: scale(0);
        transition: transform 0.3s ease-in;
    }
`;

const Overlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        font-size: 200px;
        font-weight: bold;
        color: white;
        text-align: center;
        opacity: 0;
        transition: opacity 0.3s;
    }
    position: absolute;
    width: ${props => `${INITIAL_SIZE / props.scale}px`};
    height: ${props => `${INITIAL_SIZE / props.scale}px`};
    @media(max-width: 768px) {
        width: ${props => `${(INITIAL_SIZE / props.scale)/2}px`};
        height: ${props => `${(INITIAL_SIZE / props.scale)/2}px`};
    }
    top: 0;
    ${props => props.left ?
        css`right: 0;` :
        css`left: 0;`
    }
    border-radius: 50%;
    background: ${props => props.color} url(${props => props.image}) no-repeat center;
    background-size: contain;
    cursor: pointer;
    /* opacity: 0.5; */
    transition: all 0.3s ease-in-out;
    &:hover, &.expanded {
        transition: all 0.3s ease-in-out;
        box-shadow: 0px 0px 160px white;
        width: 100vw;
        height: 100vh;
        border-radius: ${props => `${3 / props.scale}px`};
        p {
            opacity: 1;
            transition: opacity 0.3s;
        }
    }
`;

export default function TimelineItem(props) {

    const [css, setCss] = useState({});
    const [expanded, setExpanded] = useState(false);
    const [overlayClass, setOverlayClass] = useState(null);
    const itemRef = useRef(null);

    useEffect(() => {
        if (props.collapse) {
            setTimeout(() => {
                setOverlayClass(null);
            }, props.transitionTime * 1000);
            setCss({
                scale: 0
            });
            setExpanded(false);
        }
    }, [props.collapse])

    const selectItem = () => {
        setCss({
            scale: 1,
        });
        setOverlayClass('expanded');
        setTimeout(() => {
            setExpanded(true);
            // setCss({
            //     scale: 1,
            // });
        }, props.transitionTime * 1000);

        props.selectItem(itemRef, props.eventId);

    };

    return (
        <div>
            <ItemContainer
                ref={itemRef}
                {...props}
                {...css}>
            </ItemContainer>
            {expanded ? null :
                <Overlay
                    {...props}
                    onClick={selectItem}
                    className={overlayClass}>
                    <p>{props.title}</p>
                </Overlay>}
        </div>
    );
}
