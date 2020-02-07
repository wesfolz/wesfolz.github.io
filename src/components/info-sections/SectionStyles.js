import styled from 'styled-components/macro';
import UnderlineButton from 'components/buttons/UnderlineButton';

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

export const SectionHeader = styled.header`
    background-color: ${props => props.color};
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p {
        font-size: 32px;
        font-weight: bold;
        color: white;
        text-align: center;
    }
    width: 100vw;
    height: 400px;
    @media(max-width: 768px), (max-height: 850px) {
        height: 240px;
        p {
            font-size: 20px;
        }
    }
`;

export const HeaderImg = styled.div`
    width: ${props => `${props.imageSize}px`};
    height: ${props => `${props.imageSize}px`};
    background: ${props => props.color} url(${props => props.image}) no-repeat center;
    background-size: contain;
    z-index: 2;
`;

export const InlineButton = styled(UnderlineButton)`
    margin: 0;
    padding: 0;
`;

export const FullImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FullRowImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 4px;
`;