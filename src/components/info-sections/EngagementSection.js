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
import TechnologySection from 'components/tech-section/TechnologySection';
import TechIcon from 'components/tech-section/TechIcon';
import InfoGrid from 'components/info-sections/InfoGrid';
import { SectionTitle, SectionText, InlineButton, FullRowImage } from 'components/info-sections/SectionStyles';

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
                    <ParallaxInfoContainer>
                        <ParallaxImage backgroundImage={ScavengerClue} backgroundColor="black"></ParallaxImage>
                    </ParallaxInfoContainer>
                    <SectionText>
                        For my senior capstone project, I worked on an interdisciplinary team of engineers to build
                        a system capable of scanning surface terrain and outputting three dimensional representations of the terrain.
                        Our system integrated LiDAR, IMU and GPS devices.
                        I wrote the algorithms for converting an uncorrected three dimensional point cloud to a surface mesh.
                    </SectionText>
                </React.Fragment>),
            title: 'Clues'
        },
        {
            content: (
                <React.Fragment>
                    <SectionText>
                        Working on a team of four, I helped build, wire and program an infrared sensing robot using a PIC24F microcontroller.
                        The robot could autonomously drive along black tape lines and read barcodes using infrared sensors.
                        The robot could also play a song on a small 8 ohm speaker using pulse width modulation.
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
                    <ParallaxInfoContainer>
                        <ParallaxImage backgroundImage={ScavengerWeb}></ParallaxImage>
                    </ParallaxInfoContainer>
                    <SectionText>
                        Working on a team of four, I helped build, wire and program an infrared sensing robot using a PIC24F microcontroller.
                        The robot could autonomously drive along black tape lines and read barcodes using infrared sensors.
                        The robot could also play a song on a small 8 ohm speaker using pulse width modulation.
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
            infoTitle="I got engaged!"
            infoSubtitle="And built an app"
            backgroundImage={Scavenger}
            backgroundColor={"black"}
            exitColor={Colors.scavenger}
            {...props}>
            <SectionTitle>The Story</SectionTitle>
            <SectionText>
                At the University of Arizona I studied&nbsp;
                <InlineButton color={Colors.uofaRed}>
                    <a href="https://ece.engineering.arizona.edu/">Electrical and Computer Engineering</a>
                </InlineButton> and received both my Bachelor of Science and Master of Science degrees.
                While there I was involved in many different projects and was a teaching assistant during the last year of my Master’s degree.
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
