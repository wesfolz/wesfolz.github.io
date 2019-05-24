import styled from 'styled-components';

export const SectionTitle = styled.h1`
    margin: 60px 0px 20px;
`;

export const SectionText = styled.p`
    margin: 0;
    background-color: white;
    padding: 20px;
    line-height: 24px;
    border-radius: 4px;
`;

export const SectionHeader = styled.div`
    background-color: ${props => props.color};
    z-index: 1;
    transition: all 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p {
        font-size: 28px;
        font-weight: bold;
        color: white;
        text-align: center;
    }
    width: 100vw;
    height: 400px;
    border-radius: ${props => `${3 / props.scale}px`};
`;

export const HeaderImg = styled.div`
    width: ${props => `${props.imageSize}px`};
    height: ${props => `${props.imageSize}px`};
    background: ${props => props.color} url(${props => props.image}) no-repeat center;
    background-size: contain;
    z-index: 2;
`;