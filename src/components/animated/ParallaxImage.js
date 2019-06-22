import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components/macro';

const ParallaxDiv = styled.div`
    position: relative;
    width: 100%;
    min-height: inherit;
    z-index: 1;
    background: ${props => props.backgroundColor || 'white'} url(${props => props.backgroundImage}) no-repeat;
    /* background-attachment: fixed; */
    /* background-size: cover; */
    background-size: auto 125%;
    border-radius: inherit;
`;

export default function ParallaxImage(props) {
    const [top, setTop] = useState(0);
    const maxOffset = props.maxOffset == null ? 100 : props.maxOffset;
    const minOffset = props.minOffset == null ? 0 : props.minOffset;

    const imageEl = useRef(null);

    const handleScroll = () => {
        const eleMid = (imageEl.current.getBoundingClientRect().bottom - imageEl.current.getBoundingClientRect().top) / 2 + imageEl.current.getBoundingClientRect().top;
        let elePercent = eleMid / (window.innerHeight);
        elePercent = (maxOffset - minOffset) * elePercent + minOffset;
        elePercent = elePercent > maxOffset ? maxOffset : elePercent;
        elePercent = elePercent < minOffset ? minOffset : elePercent;
        setTop(`${elePercent}%`);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ParallaxDiv
            ref={imageEl}
            style={{ backgroundPosition: '50% ' + top }}
            {...props}>
            {props.children}
        </ParallaxDiv>
    );
}
