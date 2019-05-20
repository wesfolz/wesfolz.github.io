import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`
    background-color: transparent;
    color: ${props => props.color || 'white'};
    font-weight: bold;
    font-size: 1rem;
    border-radius: 2px;
    padding: 4px 16px;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s ease-out, color 0.2s ease-out;
    &:hover, &.selected {
        color: black;
        background-color: ${props => props.color};
        transition: background-color 0.2s ease-out, color 0.2s ease-out;
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
            onClick={() => { if (props.click) { props.click(); } setSelected(true); }}
            className={selected ? 'selected' : null}
            {...props}>
            {props.children}
        </CustomButton>
    );
}
