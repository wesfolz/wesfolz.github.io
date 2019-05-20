import React from 'react';
import styled from 'styled-components';

//div -> position: absolute, width: 100%, opacity: 0.1, p -> background-color: none, width: 100%
const ContentGrid = styled.ul`
    list-style-type: none;
    padding: 0px;
    li {
        margin: 80px 0;
        &:first-child {
            margin: 0;
        }
        &:last-child {
            margin-bottom: 0;
        }
    }
`;

const ContentRow = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    position: relative;
    border-radius: 4px;
    @media(max-width: 768px) {
        flex-direction: column;
    }
    > * {
        padding: 0px;
        min-height: 300px;
        margin: 0;
        display: flex;
        align-items: center;
    }
    > div {
        height: 100%;
        width: 55%;
        border-radius: 4px;
        @media(max-width: 768px) {
            width: 100%;
            position: absolute;
        }
    }
    > p {
        padding: 0 40px;
        width: 45%;
        border-radius: 4px;
        box-sizing: border-box;
        @media(max-width: 768px) {
            width: 100%;
        }
    }
`;

export default function InfoGrid({ rows }) {
    const infoRows = () => {
        return (rows.map(row => {
            return (
                <ContentRow key={row.title}>
                    {row.content}
                </ContentRow>
            )
        }));
    };

    return (
        <ContentGrid>
            {infoRows()}
        </ContentGrid>
    );
}
