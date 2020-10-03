import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { FaHome, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdTimeline } from 'react-icons/md';

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
  @media (max-width: 600px) {
    border-radius: 0px;
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
    const route = (props.currentRoute || window.location.pathname).split('/')[1];
    for (let i = 0; i < routes.length; i++) {
      if (route.replace(/\//g, '') === routes[i].replace(/\//g, '')) {
        navSelect(i);
        break;
      }
    }
  }, [props.currentRoute]);

  return (
    <NavList>
      <li>
        <Link to='/'>
          <FillButton
            color={Colors.info}
            click={() => navSelect(0)}
            deselect={deselect[0]}
            select={select[0]}
          >
            <FaHome size={24} />
          </FillButton>
        </Link>
      </li>
      <li>
        <Link to={Routes.timeline}>
          <FillButton
            color={Colors.info}
            click={() => navSelect(1)}
            deselect={deselect[1]}
            select={select[1]}
          >
            <MdTimeline size={24} />
          </FillButton>
        </Link>
      </li>
      <li>
        <Link to={Routes.contact}>
          <FillButton
            color={Colors.info}
            click={() => navSelect(2)}
            deselect={deselect[2]}
            select={select[2]}
          >
            <FaEnvelope size={24} />
          </FillButton>
        </Link>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/wesley-folz/'>
          <FillButton color={Colors.info}>
            <FaLinkedin size={24} />
          </FillButton>
        </a>
      </li>
      <li>
        <a href='https://github.com/wesfolz/'>
          <FillButton color={Colors.info}>
            <FaGithub size={24} />
          </FillButton>
        </a>
      </li>
    </NavList>
  );
}
