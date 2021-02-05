import React from 'react';
import styled from 'styled-components/macro';

import FillButton from 'components/buttons/FillButton';

const CustomButton = styled(FillButton)`
  background-color: transparent;
  flex-direction: column;

  &:after {
    content: '';
    display: block;
    margin: auto;
    height: 3px;
    width: 0px;
    background: transparent;
    transition: width 0.3s ease, background-color 0.3s ease;
  }
  &:hover {
    background-color: transparent;
    color: inherit;
    &:after {
      width: 100%;
      background: ${(props) => props.color};
    }
  }
`;

export default function UnderlineButton(props) {
  return <CustomButton {...props}>{props.children}</CustomButton>;
}
