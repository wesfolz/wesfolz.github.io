import React, {useState, useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import styled from 'styled-components/macro';
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
import Routes from 'Routes';

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

const TRANSITION_TIME = 0.5;

const Container = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    padding: 0px 60px;
    box-sizing: border-box;
`;

const LogoImg = styled.img`
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    box-sizing: border-box;
    left: 0;
    top: 0;
    padding: 20px;
    z-index: -1;
    @media(max-width: 768px) {
        width: 50%;
        height: auto;
    }
`;

ReactGA.initialize('UA-140890686-1');

const App = (props) => {
    const selectionSets = [
        {
            titleText: "Hello...",
            subtitleText: "Why are you here?",
            selections: [
                { text: "I want to learn more about Wesley.", color: Colors.lightGray, backgroundColor: Colors.secondary, route: '/', nextSet: 1 },
                { text: "I want to contact Wesley.", color: Colors.lightGray, backgroundColor: Colors.secondary, route: Routes.contact },
                { text: "Why am I here?", color: Colors.lightGray, backgroundColor: Colors.secondary, route: '/', nextSet: 2 }
            ]
        },
        {
            titleText: "Who is Wesley?",
            subtitleText: "Thanks for asking!",
            sectionText:
                <p>
                    Wesley is a software engineer with experience in full stack web development, embedded programming, data structures and algorithms and many other things.
                    But more importantly, he is a problem solver who is always looking for the best way to do things.
                    Wesley's favorite types of problems are ones that require him to learn new skills and think in new ways.
                </p>,
            selections: [
                { text: "What has Wesley done thus far?", color: Colors.lightGray, backgroundColor: Colors.secondary, route: Routes.timeline },
                { text: "I want to contact Wesley.", color: Colors.lightGray, backgroundColor: Colors.secondary, route: Routes.contact },
                { text: "Cool, thanks!", color: Colors.lightGray, backgroundColor: Colors.secondary, route: '/', nextSet: 0 }
            ]
        },
        {
            titleText: "Why are any of us here?",
            subtitleText: "Here's some amateur philosophy...",
            sectionText:
                <React.Fragment>
                    <p>People seem to ask the 'why' question a lot, but is it the right question to ask? What if there is no why?</p>
                    <p>
                        Accepting there is no external purpose for our existence can be discouraging and a slippery slope into nihilism.
                        However, with the right point of view, it can be freeing and make life even more worthwhile.
                        You can create your own purpose and live life for reasons of your own choosing.
                        This will likely be more satisfying than doing things for reasons given to you by someone else.
                    </p>
                    <p>Maybe you shouldn't be asking me why you're here.<br />You should be asking yourself.</p>
                </React.Fragment>,
            selections: [
                { text: "I want to return to a simpler time.", color: Colors.lightGray, backgroundColor: Colors.secondary, route: '/', nextSet: 0 }
            ]
        }
    ];

    const [selectedSet, setSelectedSet] = useState(0);
    const [currentRoute, setCurrentRoute] = useState(null);
    const [shrinkBlock, setShrinkBlock] = useState(false);
    const [slideOutBlock, setSlideOutBlock] = useState(false);

    const handleLocationChange = () => {
        if (props.location.pathname !== currentRoute) {
            ReactGA.pageview(props.location.pathname);
        }
        if (props.location.pathname === '/') {
            setShrinkBlock(false);
            setSlideOutBlock(false);
            setSelectedSet(0);
        }
        setCurrentRoute(props.location.pathname);
    };

    useEffect(() => {
        handleLocationChange();
    }, [props.location]);

    const selectItem = (index) => {
        if (selectionSets[selectedSet].selections[index].route !== '/') {
            setCurrentRoute(selectionSets[selectedSet].selections[index].route);
            setTimeout(() => {
                props.history.push(selectionSets[selectedSet].selections[index].route);
            }, TRANSITION_TIME * 1000);
        } else {
            setTimeout(() => {
                setShrinkBlock(false);
                setSlideOutBlock(false);
                setSelectedSet(selectionSets[selectedSet].selections[index].nextSet);
            }, TRANSITION_TIME * 1000);
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
            <Navbar currentRoute={currentRoute}></Navbar>
            <Route path="/" exact render={() =>
                <SelectionBlock
                    transitionTime={TRANSITION_TIME}
                    shrink={shrinkBlock}
                    slideOut={slideOutBlock}
                    selectItem={selectItem}
                    {...selectionSets[selectedSet]}>
                </SelectionBlock>
            } />
            <Route path={Routes.timeline} component={Timeline}></Route>
            <Route path={Routes.contact} component={ContactForm}></Route>
        </Container>
    );
};

export default withRouter(App);