import React from 'react';
import styled from 'styled-components/macro';
import FadeScroll from 'components/animated/FadeScroll';

const SkillsGrid = styled.ul`
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    flex-wrap: wrap;
    width: 100%;
    background-color: white;
    padding-top: 20px;
    border-radius: 4px;
    @media (max-width: 390px) {
        justify-content: center;
    }
`;

const SkillItem = styled.li`
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75px;
    @media (max-width: 390px) {
        padding: 20px;
    }
    p {
        margin-bottom: 0;
        text-align: center;
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

const SkillFade = styled(FadeScroll)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function TechnologySection({ techList }) {
    const technologies = () => {
        return (techList.map((item, index) => {
            return (
                <SkillItem key={item.title}>
                    <SkillFade delay={50*index}>
                    <i>{item.icon}</i>
                    <p>{item.title}</p>
                    </SkillFade>
                </SkillItem>
            );
        }));
    };

    return (
        <SkillsGrid>
            {technologies()}
        </SkillsGrid>
    );
}
