import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const WriterText = styled.div`
    color: ${props => props.color || 'inherit'};
    font-family: 'Fira Code';
    overflow: hidden;
    margin: 0;
`;

const WriterCharacter = styled.span`
    opacity: ${props => props.opacity || 0};
`;

export default function TypeWriter({ text, start, delay, onComplete, color, className }) {

    const [visibleIndex, setVisibleIndex] = useState(-1);

    const updateCharacterIndex = (interval) => {
        setVisibleIndex(prevIndex => {
            if (prevIndex >= text.length) {
                if (onComplete) {
                    onComplete();
                }
                return prevIndex;
            } else {
                setTimeout(() => updateCharacterIndex(interval), interval);
                return (prevIndex + 1);
            }
        });
    };

    useEffect(() => {
        setVisibleIndex(-1);
        if (start && text) {
            const interval = (delay && text.length) ? delay / text.length : 50;
            setTimeout(() => updateCharacterIndex(interval), interval);
        }
    }, [text, start]);

    const renderedText = () => {
        if (!text) {
            return null;
        }
        return [...text].map((char, i) => {
            return <WriterCharacter key={i} opacity={visibleIndex >= i ? 1 : 0}>{char}</WriterCharacter>
        });
    };

    return (
        <WriterText className={className} color={color}>
            {renderedText()}
        </WriterText>
    );
}
