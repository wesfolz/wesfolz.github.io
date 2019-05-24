import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Wildcat from 'images/wildcat.jpg';
import Surface from 'images/surface.png';
import Robot from 'images/robot.jpg';
import Encryption from 'images/encryption.png';
import Models3D from 'images/3D.jpg';
import MtsPoster from 'images/Mobile_Terrain_Scanning.pdf';
import Cpp from 'images/logos/c++.svg';
import Python from 'images/logos/python.svg';
import Matlab from 'images/logos/matlab.png';
import Xilinx from 'images/logos/xilinx.svg';
import Javascript from 'images/logos/javascript.svg';

import Colors from 'styles/Colors.js';
import InfoSection from 'components/info-sections/InfoSection';
import ParallaxInfoImage from 'components/ParallaxInfoImage';
import TechnologySection from 'components/tech-section/TechnologySection';
import TechIcon from 'components/tech-section/TechIcon';
import InfoGrid from 'components/info-sections/InfoGrid';
import { SectionTitle, SectionText } from 'components/info-sections/SectionStyles';

export default function CollegSection(props) {

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
            icon: <TechIcon src={Python}></TechIcon>,
            title: 'Python'
        },
        {
            icon: <TechIcon src={Matlab}></TechIcon>,
            title: 'MATLAB'
        },
        {
            icon: <TechIcon src={Xilinx}></TechIcon>,
            title: 'Verilog'
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
            icon: <FontAwesomeIcon icon={['fab', 'php']} color={Colors.php} size="3x"></FontAwesomeIcon>,
            title: 'PHP'
        },
    ];

    const rows = [
        {
            content: (
                <React.Fragment>
                    <ParallaxInfoImage backgroundImage={Surface} overlayColor={Colors.uofa} href={MtsPoster}></ParallaxInfoImage>
                    <SectionText>
                        I developed and maintained Big Data web applications for retrieval and visualization of spacecraft and satellite telemetry data.
                        For this team I worked as a full stack engineer contributing on a wide array of features.
                        I redesigned and implemented the UIs for plotting data and building queries.
                        I improved performance of telemetry database queries by a factor of 10.
                        I developed the requirements and architecture for new visualization applications.
                        I built prototype applications to test out new technologies for searching and visualizing of large datasets.
                    </SectionText>
                </React.Fragment>),
            title: 'Mobile Terrain Scanning'
        },
        {
            content: (
                <React.Fragment>
                    <SectionText>Developing and maintaining web applications for Big Data retrieval and visualization using Java Wicket and jQuery. Developing prototype web applications with ReactJS and Elasticsearch.</SectionText>
                    <ParallaxInfoImage backgroundImage={Models3D} backgroundColor="black" overlayColor={Colors.uofa} href="http://youtu.be/KQVvxJpnd_8"></ParallaxInfoImage>
                </React.Fragment>),
            title: 'Images To 3D Models'
        },
        {
            content: (
                <React.Fragment>
                    <ParallaxInfoImage backgroundImage={Robot} overlayColor={Colors.uofa} href="https://www.facebook.com/wesley.folz/videos/10152455549220229/"></ParallaxInfoImage>
                    <SectionText>Developing and maintaining web applications for Big Data retrieval and visualization using Java Wicket and jQuery. Developing prototype web applications with ReactJS and Elasticsearch.</SectionText>
                </React.Fragment>),
            title: 'Robot'
        },
        {
            content: (
                <React.Fragment>
                    <SectionText>Developing and maintaining web applications for Big Data retrieval and visualization using Java Wicket and jQuery. Developing prototype web applications with ReactJS and Elasticsearch.</SectionText>
                    <ParallaxInfoImage backgroundImage={Encryption} overlayColor={Colors.uofa} href="https://github.com/wesfolz/Real_Time_Video_Encryption/blob/master/Final%20Project%20Report.pdf"></ParallaxInfoImage>
                </React.Fragment>),
            title: 'Real Time Video Encryption'
        }
    ];

    return (
        <InfoSection
            title="University of Arizona"
            subtitle="Master of Science"
            backgroundImage={Wildcat}
            backgroundColor={Colors.uofa}
            exitColor={Colors.uofaRed}
            {...props}>

            <SectionTitle>Summary</SectionTitle>
            <SectionText>Lorem ipsum dolor</SectionText>
            <SectionTitle>Projects</SectionTitle>
            <InfoGrid rows={rows}>
            </InfoGrid>
            <SectionTitle>Technology</SectionTitle>
            <TechnologySection techList={techList}>
            </TechnologySection>
        </InfoSection>
    );
}
