import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/macro';

const ParallaxDiv = styled.div`
  position: relative;
  width: 100%;
  min-height: inherit;
  z-index: 1;
  background: ${(props) => props.backgroundColor || 'transparent'}
    url(${(props) => props.backgroundImage}) no-repeat;
  /* background-attachment: fixed; */
  /* background-size: cover; */
  background-size: auto 125%;
  border-radius: inherit;
`;

export default function ParallaxImage(props) {
  const imageEl = useRef(null);

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
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    setTimeout(() => handleScroll(), 925);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [props.maxOffset, props.minOffset]);

  return (
    <ParallaxDiv ref={imageEl} {...props}>
      {props.children}
    </ParallaxDiv>
  );
}
