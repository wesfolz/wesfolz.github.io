import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components/macro';
import FillButton from 'components/buttons/FillButton';

const CustomButton = styled(FillButton)`
  background-color: ${(props) => props.backgroundColor || 'black'};
  border-radius: 6px;
  padding: 8px 16px;
  box-shadow: ${(props) => props.shadow};
  &:hover,
  &.selected {
    color: white;
    box-shadow: ${(props) => props.shadow || '0px 0px 16px white'};
    background-color: ${(props) => props.backgroundColor || 'black'};
  }
`;

export default function SelectableButton(props) {
  const [css, setCss] = useState({
    transitionTime: '0.2s'
  });
  const timer = useRef(null);

  const click = () => {
    setCss({
      shadow: '0px 40px 160px transparent',
      transitionTime: '0.75s'
    });
    timer.current = setTimeout(() => {
      setCss({ shadow: null });
    }, 750);
    props.onClick();
  };

  useEffect(() => {
    return () => {
      timer.current && clearTimeout(timer.current);
    };
  }, []);

  return (
    <CustomButton
      {...props}
      onClick={click}
      shadow={css.shadow}
      opacity={css.opacity}
      tt={css.transitionTime}
    >
      {props.children}
    </CustomButton>
  );
}
