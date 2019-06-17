import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Scavenger from 'images/scavenger.svg';
import ScavengerChat from 'images/scavenger-chat.png';
import ScavengerWeb from 'images/scavenger-web.png';
import ScavengerClue from 'images/scavenger-clue.png';
import Proposal from 'images/proposal.jpg';

import FirebaseLogo from 'images/logos/firebase.svg';
import MapsLogo from 'images/logos/google-maps.svg';
import BootstrapLogo from 'images/logos/bootstrap.svg';

import Colors from 'styles/Colors.js';
import InfoSection from 'components/info-sections/InfoSection';
import ParallaxImage from 'components/animated/ParallaxImage';
import ParallaxInfoContainer from 'components/animated/ParallaxInfoContainer';
import ParallaxInfoImage from 'components/animated/ParallaxInfoImage';
import TechnologySection from 'components/tech-section/TechnologySection';
import TechIcon from 'components/tech-section/TechIcon';
import InfoGrid from 'components/info-sections/InfoGrid';
import { SectionTitle, SectionText, FullRowImage } from 'components/info-sections/SectionStyles';

export default function EngagementSection(props) {

    const techList = [
        {
            icon: <FontAwesomeIcon icon={['fab', 'react']} color={Colors.react} size="3x"></FontAwesomeIcon>,
            title: 'React/React Native'
        },
        {
            icon: <TechIcon src={BootstrapLogo}></TechIcon>,
            title: 'Bootstrap'
        },
        {
            icon: <TechIcon src={FirebaseLogo}></TechIcon>,
            title: 'Firebase'
        },
        {
            icon: <TechIcon src={MapsLogo}></TechIcon>,
            title: 'Google Maps API'
        }
    ];

    const appRows = [
        {
            content: (
                <React.Fragment>
                    <ParallaxInfoImage backgroundImage={ScavengerClue} backgroundColor="black" overlayColor="#EB2532" href="https://github.com/wesfolz/ScavengerApp"></ParallaxInfoImage>
                    <SectionText>
                        I created a storyline which would set the scene for a series of clues she had to solve. 
                        Some of the clues required her to enter answers to questions and for others she needed to drive to specific destinations. 
                        The location-based clues would automatically unlock once her gps position showed she was close enough to the specific destination. 
                        After she worked her way through all the tasks, she found me on my knee. 
                    </SectionText>
                </React.Fragment>),
            title: 'Clues'
        },
        {
            content: (
                <React.Fragment>
                    <SectionText>
                        I added a real-time chat feature to the app so if she was stumped by a particular clue she could ask me (disguised as my dog Peach) for help. 
                        This came in handy once or twice and really saved the day. 
                        At one point, she thought one of the clues was at home (which was very incorrect and would have ruined the surprise) but after consulting Peach, she was back on track.
                    </SectionText>
                    <ParallaxInfoContainer>
                        <ParallaxImage backgroundImage={ScavengerChat} backgroundColor="black"></ParallaxImage>
                    </ParallaxInfoContainer>
                </React.Fragment>),
            title: 'Real-time Chat'
        }
    ];

    const webRows = [
        {
            content: (
                <React.Fragment>
                    <ParallaxInfoImage backgroundImage={ScavengerWeb} overlayColor="#EB2532" href="https://github.com/wesfolz/scavenger-web"></ParallaxInfoImage>
                    <SectionText>
                        I built a web app so that I could monitor how many clues she had solved, communicate with her via the instant chat interface and track her location in real time from my computer. 
                        This feature took the guesswork out of setting up her final surprise. 
                    </SectionText>
                </React.Fragment>),
            title: 'Location Tracking'
        }
    ];

    const resultRows = [
        {
            content: (
                <FullRowImage src={Proposal}></FullRowImage>),
            title: 'She said yes!'
        }
    ];

    return (
        <InfoSection
            infoTitle="I Got Engaged!"
            infoSubtitle="And Built An App"
            backgroundImage={Scavenger}
            backgroundColor={"black"}
            exitColor={Colors.scavenger}
            {...props}>
            <SectionTitle>The Story</SectionTitle>
            <SectionText>
                I was planning to ask my girlfriend of seven years to marry me, but I wanted the proposal to be special and unique. 
                I thought it would be a cool idea to send her on a scavenger hunt to different places that held significance in our relationship. 
                Thinking about the logistics of setting up the hunt seemed impractical and prone to errors, but then I remembered that I’m an engineer, so I wrote software to handle the logistics for me.
            </SectionText>
            <SectionTitle>The Mobile App</SectionTitle>
            <InfoGrid rows={appRows}></InfoGrid>
            <SectionTitle>The Web App</SectionTitle>
            <InfoGrid rows={webRows}></InfoGrid>
            <SectionTitle>Technology Stack</SectionTitle>
            <TechnologySection techList={techList}></TechnologySection>
            <SectionTitle>The Result</SectionTitle>
            <InfoGrid rows={resultRows}></InfoGrid>
        </InfoSection>
    );
}
