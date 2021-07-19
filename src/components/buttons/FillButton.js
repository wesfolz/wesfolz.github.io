import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";

const CustomButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.color || "inherit"};
  font-weight: bold;
  font-size: 16px;
  font-family: "Source Code Pro";
  border-radius: 6px;
  padding: 4px 16px;
  outline: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  border: 0;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover,
  &.selected {
    color: black;
    background-color: ${(props) => props.color};
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default function FillButton(props) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (props.deselect) {
      setSelected(false);
    } else if (props.select) {
      setSelected(true);
    }
  }, [props.deselect, props.select]);

  return (
    <CustomButton
      onClick={() => {
        if (props.click) {
          props.click();
        }
        setSelected(!props.noSelect);
      }}
      className={selected ? "selected" : null}
      {...props}
    >
      {props.children}
    </CustomButton>
  );
}
