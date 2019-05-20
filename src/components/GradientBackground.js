import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Gradient = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(to bottom, ${props => props.color || '#011627'} 0%, black 100%);
    transition: opacity ${props => props.transitionTime || '1s'};
    opacity: ${props => props.opacity || 0};
    position: absolute;
    z-index: -2;
    border-radius: 6px;
`;

const TransitionGradient = styled(Gradient)`
  background-image: linear-gradient(to bottom, ${props => props.backgroundColor || '#1D1F21'} 0%, black 100%);
  opacity: 1;
`;

export default function GradientBackground(props) {
    const [css, setCss] = useState({ opacity: 1, color: props.backgroundColor });

    useEffect(() => {
        if (props.backgroundColor != null) {
            setCss({
                opacity: 0,
                color: css.color
            });
            setTimeout(() => {
                setCss({
                    opacity: 1,
                    color: props.backgroundColor
                });
            }, props.transitionTime || 1000);
        }
    }, [props.backgroundColor]);

    return (
        <React.Fragment>
            <TransitionGradient
                {...props}>
            </TransitionGradient>
            <Gradient
                {...props}
                color={css.color}
                opacity={css.opacity}>
                {props.children}
            </Gradient>
        </React.Fragment>
    );
}
