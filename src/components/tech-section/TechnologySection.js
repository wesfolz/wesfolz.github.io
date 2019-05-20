import React from 'react';
import styled from 'styled-components';

const SkillsGrid = styled.ul`
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    background-color: white;
    padding-top: 20px;
    border-radius: 4px;
`;

const SkillItem = styled.li`
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75px;
    p {
        margin-bottom: 0;
    }
    i {
            transform: scale(1);
            transition: transform 0.3s;
    }
    &:hover {
        i {
            transform: scale(1.5);
            transition: transform 0.3s;
        }
    }
`;

export default function TechnologySection({ techList }) {
    const technologies = () => {
        return (techList.map(item => {
            return (<SkillItem key={item.title}>
                <i>{item.icon}</i>
                <p>{item.title}</p>
            </SkillItem>);
        }));
    };

    return (
        <SkillsGrid>
            {technologies()}
        </SkillsGrid>
    );
}
