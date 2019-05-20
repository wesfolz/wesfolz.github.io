import React, { useState, useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import GradientBackground from 'components/GradientBackground';
import ContactForm from 'components/contact/ContactForm';
import SelectionBlock from 'components/SelectionBlock';
import Colors from 'styles/Colors';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    faTimes,
    faHome,
    faEnvelope,
    faEnvelopeOpen,
    faEnvelopeOpenText,
    faExclamationTriangle,
    faCheckSquare,
    faUser
} from '@fortawesome/free-solid-svg-icons'
import Timeline from 'components/timeline/Timeline';
import Navbar from 'components/Navbar';
import Logo from 'images/logos/logo_primary.svg';

library.add(
    fab,
    faTimes,
    faHome,
    faEnvelope,
    faEnvelopeOpen,
    faEnvelopeOpenText,
    faExclamationTriangle,
    faCheckSquare,
    faUser);

const LogoImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    box-sizing: border-box;
    left: 0;
    top: 0;
    padding: 20px;
    @media(max-width: 768px) {
        width: 50%;
        height: auto;
    }
`;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    padding: 0px 60px;
    box-sizing: border-box;
`;

const App = (props) => {
    const selectionSets = [
        {
            titleText: "Hello...",
            subtitleText: "Why are you here?",
            selections: [
                { text: "I want to learn more about you.", color: Colors.timeline, backgroundColor: Colors.timelineBackground, route: '/timeline' },
                { text: "I want to contact you.", color: Colors.contact, backgroundColor: Colors.contactBackground, route: '/contact' },
                { text: "Why are any of us here?", color: "#3891A6", backgroundColor: "#3891A6", route: '/' }
            ]
        },
        {
            titleText: "IDK",
            subtitleText: "whatever",
            sectionText: "I developed and maintained Big Data web applications for retrieval and visualization of spacecraft and satellite telemetry data. For this team I worked as a full stack engineer contributing on a wide array of features. I redesigned and implemented the UIs for plotting data and building queries. I improved performance of telemetry database queries by a factor of 10. I developed the requirements and architecture for new visualization applications. I built prototype applications to test out new technologies for searching and visualizing of large datasets.",
            selections: [
                { text: "I want to learn more about you.", color: Colors.pink, backgroundColor: Colors.timeline, route: '/timeline' },
                { text: "I want to contact you.", color: Colors.orange, backgroundColor: Colors.contactBackground, route: '/contact' },
                { text: "Cool, thanks!", color: Colors.yellow, backgroundColor: Colors.primary, route: '/' }
            ]
        }
    ];

    const [selectedSet, setSelectedSet] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [currentRoute, setCurrentRoute] = useState(null);
    const [shrinkBlock, setShrinkBlock] = useState(false);
    const [slideOutBlock, setSlideOutBlock] = useState(false);
    const [defaultColor, setDefaultColor] = useState(Colors.primary);

    const handleLocationChange = () => {
        if (props.location.pathname === '/') {
            setShrinkBlock(false);
            setSlideOutBlock(false);
            setSelectedIndex(null);
        } else {
            switch (props.location.pathname) {
                case '/timeline':
                    setSelectedIndex(0);
                    break;
                case '/contact':
                    setSelectedIndex(1);
                    break;
                default:
                    setSelectedIndex(null);
                    break;
            }
        }
        setCurrentRoute(props.location.pathname);
    };

    useEffect(() => {
        handleLocationChange();
    }, [props.location]);

    const selectItem = (index, history) => {
        setSelectedIndex(index);
        if (selectionSets[selectedSet].selections[index].route !== '/') {
            setCurrentRoute(selectionSets[selectedSet].selections[index].route);
            setTimeout(() => {
                history.push(selectionSets[selectedSet].selections[index].route);
            }, 1000);
        } else {
            setTimeout(() => {
                setShrinkBlock(false);
                setSlideOutBlock(false);
                setSelectedIndex(null);
                setDefaultColor(selectionSets[selectedSet].selections[index].backgroundColor);
                setSelectedSet(selectedSet < (selectionSets.length - 1) ? selectedSet + 1 : 0);
            }, 1000);
        }
        if (selectionSets[selectedSet].selections[index].route === '/timeline') {
            setShrinkBlock(true);
        } else {
            setSlideOutBlock(true);
        }
    };

    return (
        <Container>
            <GradientBackground
                // backgroundColor={selectedIndex == null ? defaultColor : selectionSets[selectedSet].selections[selectedIndex].backgroundColor}>
                backgroundColor={Colors.primary}>
            </GradientBackground>
            <LogoImg src={Logo}></LogoImg>
            <Route path="/" exact render={(props) =>
                <SelectionBlock
                    {...props}
                    shrink={shrinkBlock}
                    slideOut={slideOutBlock}
                    selectItem={selectItem}
                    {...selectionSets[selectedSet]}>
                </SelectionBlock>
            } />
            <Route path="/timeline" component={Timeline}></Route>
            <Route path="/contact" component={ContactForm}></Route>
            <Navbar currentRoute={currentRoute}></Navbar>
        </Container>
    );
};

export default withRouter(App);