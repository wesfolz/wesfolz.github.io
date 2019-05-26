import React from 'react';

import Lockheed from 'images/lockheed.jpg';
import Orion from 'images/orion.jpg';
import LAS from 'images/las.jpg';
import Scrum from 'images/scrum.png';
import Elastic from 'images/logos/elasticsearch.svg';
import Labview from 'images/logos/labview.svg';
import Python from 'images/logos/python.svg';
import Javascript from 'images/logos/javascript.svg';
import Cpp from 'images/logos/c++.svg';
import Bootstrap from 'images/logos/bootstrap.svg';
import Jquery from 'images/logos/jquery.svg';
import Git from 'images/logos/git.svg';

import Colors from 'styles/Colors';
import InfoSection from 'components/info-sections/InfoSection';
import ParallaxInfoImage from 'components/ParallaxInfoImage';
import TechnologySection from 'components/tech-section/TechnologySection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TechIcon from 'components/tech-section/TechIcon';
import InfoGrid from 'components/info-sections/InfoGrid';
import { SectionTitle, SectionText } from 'components/info-sections/SectionStyles';

export default function LokcheedSection(props) {

    const techList = [
        {
            icon: <FontAwesomeIcon icon={['fab', 'java']} color={Colors.java} size="3x"></FontAwesomeIcon>,
            title: 'Java'
        },
        {
            icon: <FontAwesomeIcon icon={['fab', 'html5']} color="red" size="3x"></FontAwesomeIcon>,
            title: 'HTML'
        },
        {
            icon: <FontAwesomeIcon icon={['fab', 'css3-alt']} color="blue" size="3x"></FontAwesomeIcon>,
            title: 'CSS'
        },
        {
            icon: <TechIcon src={Javascript}></TechIcon>,
            title: 'JavaScript'
        },
        {
            icon: <TechIcon src={Bootstrap}></TechIcon>,
            title: 'Bootstrap'
        },
        {
            icon: <FontAwesomeIcon icon={['fab', 'react']} color={Colors.react} size="3x"></FontAwesomeIcon>,
            title: 'React'
        },
        {
            icon: <TechIcon src={Jquery}></TechIcon>,
            title: 'jQuery'
        },
        {
            icon: <TechIcon src={Elastic}></TechIcon>,
            title: 'Elastic'
        },
        {
            icon: <TechIcon src={Python}></TechIcon>,
            title: 'Python'
        },
        {
            icon: <TechIcon src={Cpp}></TechIcon>,
            title: 'C/C++'
        },
        {
            icon: <TechIcon src={Labview}></TechIcon>,
            title: 'LabView'
        },
        {
            icon: <TechIcon src={Git}></TechIcon>,
            title: 'git'
        },
        {
            icon: <FontAwesomeIcon icon={['fab', 'jira']} color={Colors.jira} size="3x"></FontAwesomeIcon>,
            title: 'Jira'
        },
    ];

    const platformList = [
        {
            icon: <FontAwesomeIcon icon={['fab', 'linux']} color="black" size="3x"></FontAwesomeIcon>,
            title: 'Linux'
        },
        {
            icon: <FontAwesomeIcon icon={['fab', 'windows']} color={Colors.windows} size="3x"></FontAwesomeIcon>,
            title: 'Windows'
        },
    ];

    const rows = [
        {
            content: (
                <React.Fragment>
                    <ParallaxInfoImage backgroundImage={Orion} overlayColor={Colors.lockheed} href="https://www.lockheedmartin.com/en-us/products/orion.html"></ParallaxInfoImage>
                    <SectionText>
                        I developed and maintained Big Data web applications for retrieval and visualization of telemetry data for spacecrafts and satellites such as Orion and GOES-R.
                        For this team I worked as a full stack engineer contributing on a wide array of features.
                        I redesigned and implemented the UIs for plotting data and building queries.
                        I improved performance of telemetry database queries by a factor of 10.
                        I developed the requirements and architecture for new visualization applications.
                        I built prototype applications to test out new technologies for searching and visualizing large datasets.
                    </SectionText>
                </React.Fragment>),
            title: 'Full Stack Web Development'
        },
        {
            content: (
                <React.Fragment>
                    <SectionText>
                        I developed embedded applications to control electrical electrical ground support equipment for testing different functions of the Orion Multi-Purpose Crew Vehicle and Launch Abort System.
                        I designed and implemented innovative UIs for new testing applications.
                        I debugged and fixed many difficult issues in systems involving both software and hardware components.
                        In one instance I tracked down a firmware bug in a serial communication card from one of our vendors.
                        I wrote an application to power and retrieve data from different flight computers for post-landing data analysis. </SectionText>
                    <ParallaxInfoImage backgroundImage={LAS} overlayColor={Colors.lockheed} href="https://www.nasa.gov/sites/default/files/atoms/files/orion_las_fact_sheet_8.5x11_4page_11_19_15.pdf"></ParallaxInfoImage>
                </React.Fragment>),
            title: 'Embedded Programming'
        },
        {
            content: (
                <React.Fragment>
                    <ParallaxInfoImage backgroundImage={Scrum} overlayColor={Colors.lockheed} href="https://www.scrum.org/"></ParallaxInfoImage>
                    <SectionText>
                        I served as the Scrum Master for my Agile software development team. I was in charge of running daily meetings, and coordinating dependencies with other teams. I also managed our Jira dsashboard and participated in software peer reviews.
                    </SectionText>
                </React.Fragment>),
            title: 'Scrum Master'
        }
    ];

    return (
        <InfoSection
            infoTitle="Lockheed Martin"
            infoSubtitle="Software Engineer"
            backgroundImage={Lockheed}
            backgroundColor={Colors.lockheed}
            {...props}>

            <SectionTitle>Summary</SectionTitle>
            <SectionText>
                I have worked as a software engineer at Lockheed Martin since 2016.
                In my time there I worked on two different teams, doing both embedded programming and full stack web development.
            </SectionText>
            <SectionTitle>Job Duties</SectionTitle>
            <InfoGrid rows={rows}>
            </InfoGrid>
            <SectionTitle>Technology</SectionTitle>
            <TechnologySection techList={techList}>
            </TechnologySection>
            <SectionTitle>Development Platforms</SectionTitle>
            <TechnologySection techList={platformList}>
            </TechnologySection>
        </InfoSection>
    );
}
