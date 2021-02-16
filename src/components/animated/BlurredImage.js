import styled from 'styled-components/macro';

const BlurredImage = styled.div`
  position: absolute;
  width: 100%;
  min-height: inherit;
  z-index: 1;
  background: ${(props) => props.background};
  filter: ${(props) => props.blur ? 'blur(8px)' : ''};
  opacity: ${(props) => props.opacity || 0};
  transition: opacity 500ms ease;
  background-position: 50% ${props => props.maxOffset || 100}%;
`;

export default BlurredImage;
