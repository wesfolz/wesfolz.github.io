import styled from 'styled-components/macro';
import { mix } from 'polished';

import UnderlineButton from 'components/buttons/UnderlineButton';
import Colors from 'styles/Colors';

export const SectionTitle = styled.h1`
  margin: 60px 0px 20px;
`;

export const SectionText = styled.p`
  margin: 0;
  background-color: ${mix(0.85, Colors.surface, Colors.primary)};
  padding: 20px;
  line-height: 24px;
  border-radius: 4px;
`;

export const SectionHeader = styled.header`
  background-color: ${({ color }) => color ? mix(0.65, color, Colors.primary) : 'transparent'};
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* &:before {
    width: 100%;
    position: absolute;
    content: '';
    height: 100%;
    background-color: rgba(1, 22, 39, 0.25);
    z-index: 1;
    top: 0;
    left: 0;
    z-index: 100;
    border-radius: ${(props) => `${3 / props.scale}px`};
  } */
  p {
    font-size: 32px;
    font-weight: bold;
    color: white;
    text-align: center;
  }
  border-radius: ${(props) => `${3 / props.scale}px`};
  width: 100vw;
  height: 400px;
  @media (max-width: 768px), (max-height: 850px) {
    height: 240px;
    p {
      font-size: 20px;
    }
  }
`;

export const HeaderImg = styled.div`
  width: ${(props) => `${props.imageSize}px`};
  height: ${(props) => `${props.imageSize}px`};
  background: url(${(props) => props.image}) no-repeat center;
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
  position: relative;
  overflow: hidden;
`;

export const FullRowImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  transition: opacity 500ms ease;
  opacity: ${(props) => props.opacity};
`;

export const FullRowImageBlurred = styled(FullRowImage)`
  filter: ${(props) => props.blur ? 'blur(16px)' : ''};
  position: absolute;
`;