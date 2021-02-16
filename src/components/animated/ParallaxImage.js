import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import useProgressiveImage from '../../hooks/useProgressiveImage';
import BlurredImage from './BlurredImage';

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: inherit;
  z-index: 1;
`

const ParallaxDiv = styled.div`
  position: absolute;
  width: 100%;
  min-height: inherit;
  z-index: 1;
  background: ${(props) => props.background};
  /* background-attachment: fixed; */
  /* background-size: cover; */
  background-size: auto 125%;
  border-radius: inherit;
  opacity: ${(props) => props.opacity};
  background-position: 50% ${props => props.maxOffset || 75}%;
  transition: opacity 500ms ease;
`;

const BlurredPlaceholder = styled(BlurredImage)`
  background-size: auto 125%;
  border-radius: inherit;
  background-position: 50% ${props => props.maxOffset || 75}%;
`

export default function ParallaxImage(props) {
  const imageEl = useRef(null);
  const blurEl = useRef(null);
  const loading = useProgressiveImage({ imgSrc: props.backgroundImage });

  useEffect(() => {
    const handleScroll = (e) => {
      if (!imageEl.current) return;
      const maxOffset = props.maxOffset == null ? 100 : props.maxOffset;
      const minOffset = props.minOffset == null ? 0 : props.minOffset;
      const rect = imageEl.current.getBoundingClientRect();
      const eleMid = (rect.bottom - rect.top) / 2 + rect.top;
      let elePercent = eleMid / window.innerHeight;
      elePercent = (maxOffset - minOffset) * elePercent + minOffset;
      elePercent = Math.min(elePercent, maxOffset);
      elePercent = Math.max(elePercent, minOffset);
      imageEl.current.style.backgroundPosition = `50%  ${elePercent}%`;
      if (blurEl.current) blurEl.current.style.backgroundPosition = `50%  ${elePercent}%`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [props.maxOffset, props.minOffset]);

  const background = `${props.backgroundColor || 'transparent'} url(${props.backgroundImage}) no-repeat`;
  const blurredBackground = props.smallBackgroundImage ? `${props.backgroundColor || 'transparent'} url(${props.smallBackgroundImage}) no-repeat` : null;
  return (
    <Container>
      <ParallaxDiv ref={imageEl} opacity={loading ? 0 : 1} background={background}>
      </ParallaxDiv>
      {blurredBackground && <BlurredPlaceholder ref={blurEl} background={blurredBackground} opacity={loading ? 1 : 0} blur maxOffset={props.maxOffset}/>}
      {props.children}
    </Container>
  );
}
