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
                        I developed and maintained Big Data web applications for retrieval and visualization of spacecraft and satellite telemetry data.
                        For this team I worked as a full stack engineer contributing on a wide array of features.
                        I redesigned and implemented the UIs for plotting data and building queries.
                        I improved performance of telemetry database queries by a factor of 10.
                        I developed the requirements and architecture for new visualization applications.
                        I built prototype applications to test out new technologies for searching and visualizing of large datasets.
                    </SectionText>
                </React.Fragment>),
            title: 'Core Data'
        },
        {
            content: (
                <React.Fragment>
                    <SectionText>Developing and maintaining web applications for Big Data retrieval and visualization using Java Wicket and jQuery. Developing prototype web applications with ReactJS and Elasticsearch.</SectionText>
                    <ParallaxInfoImage backgroundImage={LAS} overlayColor={Colors.lockheed} href="https://www.nasa.gov/sites/default/files/atoms/files/orion_las_fact_sheet_8.5x11_4page_11_19_15.pdf"></ParallaxInfoImage>
                </React.Fragment>),
            title: 'ETSO'
        },
        {
            content: (
                <React.Fragment>
                    <ParallaxInfoImage backgroundImage={Scrum} overlayColor={Colors.lockheed} href="https://www.scrum.org/"></ParallaxInfoImage>
                    <SectionText>Developing and maintaining web applications for Big Data retrieval and visualization using Java Wicket and jQuery. Developing prototype web applications with ReactJS and Elasticsearch.</SectionText>
                </React.Fragment>),
            title: 'Scrum'
        }
    ];

    return (
        <InfoSection
            title="Lockheed Martin"
            subtitle="Software Engineer"
            backgroundImage={Lockheed}
            backgroundColor={Colors.lockheed}
            {...props}>

            <SectionTitle>Summary</SectionTitle>
            <SectionText>Lorem ipsum dolor</SectionText>
            <SectionTitle>Projects</SectionTitle>
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
