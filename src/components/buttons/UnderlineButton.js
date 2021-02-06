import React from 'react';
import styled from 'styled-components/macro';

import FillButton from 'components/buttons/FillButton';
import Colors from 'styles/Colors';

const CustomButton = styled(FillButton)`
  background-color: ${Colors.surface};
  color: ${Colors.lightBlue};
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
    background-color: ${Colors.surface};
    color: white;
    &:after {
      width: 100%;
      background: ${Colors.lightBlue};
    }
  }
`;

export default function UnderlineButton(props) {
  return <CustomButton {...props}>{props.children}</CustomButton>;
}
