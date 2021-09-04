import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components/macro';
import FillButton from 'components/buttons/FillButton';

const CustomButton = styled(FillButton)`
  background-color: ${(props) => props.backgroundColor || 'rgba(0, 0, 0, 0.5)'};
  border-radius: 6px;
  padding: 8px 16px;
  box-shadow: ${(props) => props.shadow};
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
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
