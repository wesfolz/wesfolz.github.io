import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Colors from 'styles/Colors';
import FillButton from 'components/buttons/FillButton';

const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    position: fixed;
    bottom: 0;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    padding: 0px 32px;
    box-sizing: border-box;
    @media(max-height: 600px) {
        flex-direction: column;
        justify-content: space-around;
        left: 0;
        height: 100%;
        padding: 0px 4px; 
        width: unset;
    }
`;

const routes = ['/', '/timeline', '/contact'];

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
                    <FillButton color={Colors.lightBlue}
                        click={() => navSelect(0)}
                        deselect={deselect[0]} select={select[0]}>
                        <FontAwesomeIcon icon="home" size="lg"></FontAwesomeIcon>
                    </FillButton>
                </Link>
            </li>
            <li>
                <Link to="/timeline">
                    <FillButton color={Colors.timeline}
                        click={() => navSelect(1)}
                        deselect={deselect[1]} select={select[1]}>
                        <FontAwesomeIcon icon="user" size="lg"></FontAwesomeIcon>
                    </FillButton>
                </Link>
            </li>
            <li>
                <Link to="/contact">
                    <FillButton color={Colors.contact}
                        click={() => navSelect(2)}
                        deselect={deselect[2]} select={select[2]}>
                        <FontAwesomeIcon icon="envelope" size="lg"></FontAwesomeIcon>
                    </FillButton>
                </Link>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/wesley-folz/">
                    <FillButton color={Colors.linkedin}>
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg"></FontAwesomeIcon>
                    </FillButton>
                </a>
            </li>
            <li>
                <a href="https://github.com/wesfolz/">
                    <FillButton color={Colors.github}>
                        <FontAwesomeIcon icon={['fab', 'github']} size="lg"></FontAwesomeIcon>
                    </FillButton>
                </a>
            </li>
        </NavList>
    );
}
