import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { FaTimes } from "react-icons/fa";

import SelectableButton from "components/buttons/SelectableButton";
import Colors from "styles/Colors";
import {
  SectionHeader,
  HeaderImg,
} from "components/info-sections/SectionStyles";

const TRANSITION_TIME = 0.5;
const DELAY_TIME = 0.25;

const SectionWrapper = styled.article`
  position: absolute;
  top: ${(props) =>
    props.shrink ? "0" : `calc(50vh - ${props.imageSize / 2}px)`};
  left: 0;
  width: 100%;
  background-color: ${Colors.offWhite};
  transition: top ${`${TRANSITION_TIME}s ease`};
  overflow-x: hidden;
  margin-bottom: 16px;
`;

const ContentWrapper = styled.div`
  max-height: ${(props) => (props.shrink ? "10000px" : 0)};
  overflow: hidden;
  transition: max-height
    ${`${TRANSITION_TIME}s ease, padding ${TRANSITION_TIME}s ease`};
  padding: ${(props) => (props.shrink ? "0px 40px 40px" : "0px 40px")};
  margin: 0 auto;
  max-width: 1200px;
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
  color: ${(props) => props.color || "black"};
`;

export default function InfoSection(props) {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShrink(true);
    }, DELAY_TIME * 1000);
  }, []);

  const closeSection = () => {
    setShrink(false);
    setTimeout(() => {
      if (props.zoomOut) {
        props.zoomOut();
      }
    }, (TRANSITION_TIME + DELAY_TIME) * 1000);
  };

  return (
    <SectionWrapper shrink={shrink} imageSize={props.imageSize}>
      <CloseButton color={props.exitColor} onClick={closeSection}>
        <FaTimes size={24} />
      </CloseButton>
      <SectionHeader color={props.backgroundColor}>
        <p>{props.infoTitle}</p>
        <HeaderImg
          color={props.backgroundColor}
          image={props.backgroundImage}
          imageSize={props.imageSize / 1.5}
        ></HeaderImg>
        <p>{props.infoSubtitle}</p>
      </SectionHeader>
      <ContentWrapper shrink={shrink}>{props.children}</ContentWrapper>
    </SectionWrapper>
  );
}
