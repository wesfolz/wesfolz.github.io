import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { FaTimes } from 'react-icons/fa';
import { Events, animateScroll } from 'react-scroll';
import { mix } from 'polished';

import SelectableButton from 'components/buttons/SelectableButton';
import Colors from 'styles/Colors';
import { SectionHeader } from 'components/info-sections/SectionStyles';

const TRANSITION_TIME = 500;
const DELAY_TIME = 0;

const SectionWrapper = styled.article`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  background-color: ${mix(0.75, '#141414', Colors.primary)};
  overflow: hidden;
  transition: all ${TRANSITION_TIME}ms ease-in-out;
  opacity: ${(props) => (props.shrink ? 1 : 0)};
  transform: scaleY(${(props) => (props.shrink ? 1 : 0)});
  transform-origin: top;
  color: ${Colors.offWhite};
`;

const Content = styled.div`
  padding: 0px 60px 64px 60px;
  margin: 0 auto;
  max-width: 1200px;
  @media (max-width: 768px) {
    padding: 0px 48px 64px 48px;
  }
`;

const CloseButton = styled(SelectableButton)`
  position: fixed;
  z-index: 1000;
  top: 8px;
  right: 8px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: transparent;
  color: ${(props) => props.color || 'black'};
  opacity: ${(props) => (props.shrink ? 1 : 0)};
`;

export default function InfoSection(props) {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    if (props.show) {
      // const timeout = setTimeout(() => {
        setShrink(true);
      // }, (DELAY_TIME + TRANSITION_TIME));

      // return () => clearTimeout(timeout);
    }
  }, [props.show]);

  const closeSection = () => {
    Events.scrollEvent.register('end', () => {
      Events.scrollEvent.remove('end');
      setShrink(false);
      setTimeout(() => {
        props.zoomOut && props.zoomOut();
      }, [TRANSITION_TIME]);
    });
    animateScroll.scrollToTop({
      duration: (scrollDistance) => {
        const minTime = 200;
        const maxTime = TRANSITION_TIME;
        const calculatedTime = Math.abs((TRANSITION_TIME * scrollDistance) / 2);
        const minBounded = Math.min(calculatedTime, maxTime);
        return Math.max(minTime, minBounded);
      },
      smooth: 'easeInOutQuad'
    });
  };

  return (
    <SectionWrapper shrink={shrink} imageSize={props.imageSize}>
      <CloseButton shrink={shrink} color={props.exitColor} onClick={closeSection}>
        <FaTimes size={24} />
      </CloseButton>
      <SectionHeader />
      <ContentWrapper shrink={shrink}>
        <Content>{props.children}</Content>
      </ContentWrapper>
    </SectionWrapper>
  );
}
