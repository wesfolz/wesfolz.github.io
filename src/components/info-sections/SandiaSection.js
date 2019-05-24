import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Sandia from 'images/sandia.png';
import Maccs from 'images/maccs.png';
import Santeria from 'images/santeria1.png';
import Rtree from 'images/rtree.png';
import MaccsPoster from 'images/MACCS_Poster.pdf';
import SanteriaPoster from 'images/Santeria_Poster.pdf';
import AdHocPoster from 'images/Ad_Hoc_Poster.pdf';
import Cpp from 'images/logos/c++.svg';
import Javascript from 'images/logos/javascript.svg';
import Colors from 'styles/Colors';
import InfoSection from 'components/info-sections/InfoSection';
import ParallaxInfoImage from 'components/ParallaxInfoImage';
import TechnologySection from 'components/tech-section/TechnologySection';
import TechIcon from 'components/tech-section/TechIcon';
import InfoGrid from 'components/info-sections/InfoGrid';
import { SectionTitle, SectionText } from 'components/info-sections/SectionStyles';

export default function SandiaSection(props) {

    const techList = [
        {
            icon: <FontAwesomeIcon icon={['fab', 'java']} color={Colors.java} size="3x"></FontAwesomeIcon>,
            title: 'Java'
        },
        {
            icon: <TechIcon src={Cpp}></TechIcon>,
            title: 'C/C++'
        },
        {
            icon: <TechIcon src={Javascript}></TechIcon>,
            title: 'JavaScript'
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
        {
            icon: <FontAwesomeIcon icon={['fab', 'android']} color={Colors.android} size="3x"></FontAwesomeIcon>,
            title: 'Android'
        },
    ];

    const rows = [
        {
            content: (
                <React.Fragment>
                    <ParallaxInfoImage backgroundImage={Maccs} overlayColor={Colors.sandia} href={MaccsPoster}></ParallaxInfoImage>
                    <SectionText>
                        I developed and maintained Big Data web applications for retrieval and visualization of spacecraft and satellite telemetry data.
                        For this team I worked as a full stack engineer contributing on a wide array of features.
                        I redesigned and implemented the UIs for plotting data and building queries.
                        I improved performance of telemetry database queries by a factor of 10.
                        I developed the requirements and architecture for new visualization applications.
                        I built prototype applications to test out new technologies for searching and visualizing of large datasets.
                    </SectionText>
                </React.Fragment>),
            title: 'MACCS Animations'
        },
        {
            content: (
                <React.Fragment>
                    <SectionText>Developing and maintaining web applications for Big Data retrieval and visualization using Java Wicket and jQuery. Developing prototype web applications with ReactJS and Elasticsearch.</SectionText>
                    <ParallaxInfoImage backgroundImage={Santeria} overlayColor={Colors.sandia} href={SanteriaPoster}></ParallaxInfoImage>
                </React.Fragment>),
            title: 'Santeria'
        },
        {
            content: (
                <React.Fragment>
                    <ParallaxInfoImage backgroundImage={Rtree} overlayColor={Colors.sandia} href={AdHocPoster}></ParallaxInfoImage>
                    <SectionText>Developing and maintaining web applications for Big Data retrieval and visualization using Java Wicket and jQuery. Developing prototype web applications with ReactJS and Elasticsearch.</SectionText>
                </React.Fragment>),
            title: 'Ad Hoc Mobile'
        }
    ];

    return (
        <InfoSection
            title="Sandia Labs"
            subtitle="Technical Intern"
            backgroundImage={Sandia}
            backgroundColor={Colors.sandia}
            {...props}>

            <SectionTitle>Summary</SectionTitle>
            <SectionText>Lorem ipsum dolor</SectionText>
            <SectionTitle>Projects</SectionTitle>
            <InfoGrid rows={rows}></InfoGrid>
            <SectionTitle>Technology</SectionTitle>
            <TechnologySection techList={techList}></TechnologySection>
            <SectionTitle>Development Platforms</SectionTitle>
            <TechnologySection techList={platformList}>
            </TechnologySection>
        </InfoSection>
    );
}
