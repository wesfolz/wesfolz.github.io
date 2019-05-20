import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    transition: transform 0.3s;
    overflow: hidden;
    border-radius: 4px;
    & >:first-child {
        opacity: 1;
        @media(max-width: 768px) {
            opacity: 0.3;
        }
    }
    > * {
        transform: scale(1);
        transition: transform 0.3s;
    }
    &:hover {
        > * {
            transform: scale(1.1);
            transition: transform 0.3s;
        }
    }
`;

export default function ParallaxInfoContainer(props) {
    return (
        <Container>
            {props.children}
        </Container>
    );
}
