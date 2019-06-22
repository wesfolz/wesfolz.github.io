import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import Colors from 'styles/Colors';
import FillButton from 'components/buttons/FillButton';
import Routes from 'Routes';


const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    position: fixed;
    bottom: 0;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    padding: 8px 32px;
    margin: 0;
    box-sizing: border-box;
    z-index: 1000;
    background-color: black;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    @media(max-height: 500px) {
        flex-direction: column;
        justify-content: space-around;
        left: 0;
        height: 100%;
        padding: 0px 4px; 
        width: unset;
    }
`;

const routes = ['/', Routes.timeline, Routes.contact];

export default function Navbar(props) {
    const [deselect, setDeselect] = useState(Array(routes.length).fill(false));
    const [select, setSelect] = useState(Array(routes.length).fill(false));

    const navSelect = (index) => {
        let d = Array(routes.length).fill(true);
        d[index] = false;
        let s = Array(routes.length).fill(false);
        s[index] = true;
        setDeselect(d);
        setSelect(s);
    };

    useEffect(() => {
        let route = props.currentRoute || window.location.pathname;
        for (let i = 0; i < routes.length; i++) {
            if (route === routes[i]) {
                navSelect(i);
                break;
            }
        }
    }, [props.currentRoute]);

    return (
        <NavList>
            <li>
                <Link to="/">
                    <FillButton color={Colors.info}
                        click={() => navSelect(0)}
                        deselect={deselect[0]} select={select[0]}>
                        <FontAwesomeIcon icon="home" size="lg"></FontAwesomeIcon>
                    </FillButton>
                </Link>
            </li>
            <li>
                <Link to={Routes.timeline}>
                    <FillButton color={Colors.info}
                        click={() => navSelect(1)}
                        deselect={deselect[1]} select={select[1]}>
                        <FontAwesomeIcon icon="user" size="lg"></FontAwesomeIcon>
                    </FillButton>
                </Link>
            </li>
            <li>
                <Link to={Routes.contact}>
                    <FillButton color={Colors.info}
                        click={() => navSelect(2)}
                        deselect={deselect[2]} select={select[2]}>
                        <FontAwesomeIcon icon="envelope" size="lg"></FontAwesomeIcon>
                    </FillButton>
                </Link>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/wesley-folz/">
                    <FillButton color={Colors.info}>
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg"></FontAwesomeIcon>
                    </FillButton>
                </a>
            </li>
            <li>
                <a href="https://github.com/wesfolz/">
                    <FillButton color={Colors.info}>
                        <FontAwesomeIcon icon={['fab', 'github']} size="lg"></FontAwesomeIcon>
                    </FillButton>
                </a>
            </li>
        </NavList>
    );
}
