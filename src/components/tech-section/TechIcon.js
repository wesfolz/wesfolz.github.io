import React from 'react';
import styled from 'styled-components';

const SkillImage = styled.img`
    width: auto;
    height: 48px;
    max-width: 125px;
`;

export default function TechIcon(props) {
    return (
        <SkillImage src={props.src}></SkillImage>
    );
}
