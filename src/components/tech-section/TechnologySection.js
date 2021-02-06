import React from 'react';
import styled from 'styled-components/macro';
import { mix } from 'polished';

import FadeScroll from 'components/animated/FadeScroll';
import Colors from 'styles/Colors';

const SkillsGrid = styled.ul`
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    background-color: ${mix(0.85, Colors.surface, Colors.primary)};
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
    flex: 1;
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
