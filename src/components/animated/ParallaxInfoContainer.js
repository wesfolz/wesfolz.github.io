import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  position: relative;
  transition: transform 0.3s;
  overflow: hidden;
  border-radius: 4px;
  & > :first-child {
    opacity: 1;
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
  return <Container>{props.children}</Container>;
}
