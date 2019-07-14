import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Wildcat from 'images/wildcat.png';
import Surface from 'images/surface.png';
import Robot from 'images/robot.jpg';
import Encryption from 'images/encryption.png';
import Pipeline from 'images/mips_pipeline.png';
import Models3D from 'images/3D.jpg';
import MtsPoster from 'images/Mobile_Terrain_Scanning.pdf';
import Cpp from 'images/logos/c++.svg';
import Python from 'images/logos/python.svg';
import Matlab from 'images/logos/matlab.png';
import Xilinx from 'images/logos/xilinx.svg';
import Javascript from 'images/logos/javascript.svg';

import Colors from 'styles/Colors.js';
import InfoSection from 'components/info-sections/InfoSection';
import ParallaxInfoImage from 'components/animated/ParallaxInfoImage';
import TechnologySection from 'components/tech-section/TechnologySection';
import TechIcon from 'components/tech-section/TechIcon';
import InfoGrid from 'components/info-sections/InfoGrid';
import { SectionTitle, SectionText, InlineButton } from 'components/info-sections/SectionStyles';

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
            image: (
                <ParallaxInfoImage backgroundImage={Models3D} backgroundColor="black" overlayColor={Colors.uofa} href="http://youtu.be/KQVvxJpnd_8"></ParallaxInfoImage>
            ),
            text: (
                <SectionText>
                    Working with a fellow student, we developed an Android app that could convert multiple images of an object into a virtual three dimensional model of that object.
                    Our app provided a user interface for creating new models, capturing images and opening models.
                    To do the conversions from images to three dimensional models, we used a number of algorithms from the OpenCV library and developed our own custom image processing algorithms.
                </SectionText>
            ),
            title: 'Images To 3D Models'
        },
        {
            image: (
                <ParallaxInfoImage backgroundImage={Surface} overlayColor={Colors.uofa} href={MtsPoster}></ParallaxInfoImage>
            ),
            text: (
                <SectionText>
                    For my senior capstone project, I worked on an interdisciplinary team of engineers to build
                    a system capable of scanning surface terrain and outputting three dimensional representations of the terrain.
                    Our system integrated LiDAR, IMU and GPS devices.
                    I wrote the algorithms for converting an uncorrected three dimensional point cloud to a surface mesh.
                </SectionText>
            ),
            title: 'Mobile Terrain Scanning'
        },
        {
            image: (
                <ParallaxInfoImage backgroundImage={Robot} backgroundColor={Colors.uofa} overlayColor={Colors.uofa} href="https://youtu.be/l8RhUTHFiTc"></ParallaxInfoImage>
            ),
            text: (
                <SectionText>
                    Working on a team of four, I helped build, wire and program an infrared sensing robot using a PIC24F microcontroller.
                    The robot could autonomously drive along black tape lines and read barcodes using infrared sensors.
                    The robot could also play a song on a small 8 ohm speaker using pulse width modulation.
                </SectionText>
            ),
            title: 'Infrared Sensing Robot'
        },
        {
            image: (
                <ParallaxInfoImage backgroundImage={Encryption} overlayColor={Colors.uofa} href="https://github.com/wesfolz/Real_Time_Video_Encryption/blob/master/Final%20Project%20Report.pdf"></ParallaxInfoImage>
            ),
            text: (
                <SectionText>
                    Another student and I built a SystemC model to
                    simulate our real-time embedded system design.
                    Our embedded system model could encode/decode,
                    encrypt/decrypt and transmit MPEG video data.
                    After optimizing the power consumption of our system
                    we found that it was capable of encrypting 1080p video at
                    30fps in real time using a 128-bit AES coprocessor
                    operating at 72MHz.
                </SectionText>
            ),
            title: 'Real Time Video Encryption'
        },
        {
            image: (
                <ParallaxInfoImage backgroundImage={Pipeline} overlayColor={Colors.uofa} href="https://github.com/wesfolz/mips-pipeline-processor"></ParallaxInfoImage>
            ),
            text: (
                <SectionText>
                    For my computer architecture class, I worked with a partner to design a pipeline processor with forwarding and hazard detection that could run MIPS assembly instructions. 
                    We mapped the processor onto an FPGA board and used it to run our sum of absolute difference algorithm that we wrote in assembly.
                </SectionText>
            ),
            title: 'MIPS Processor'
        }
    ];

    return (
        <InfoSection
            infoTitle="University of Arizona"
            infoSubtitle="Master of Science"
            backgroundImage={Wildcat}
            backgroundColor={Colors.uofaRed}
            exitColor={Colors.uofa}
            {...props}>
            <SectionTitle>Summary</SectionTitle>
            <SectionText>
                At the University of Arizona I studied&nbsp;
                <InlineButton color={Colors.uofaRed}>
                    <a href="https://ece.engineering.arizona.edu/">Electrical and Computer Engineering</a>
                </InlineButton> and received both my Bachelor of Science and Master of Science degrees.
                While there I was involved in many different projects and was a teaching assistant during the last year of my Master’s degree.
            </SectionText>
            <SectionTitle>Projects</SectionTitle>
            <InfoGrid rows={rows}></InfoGrid>
            <SectionTitle>Technology</SectionTitle>
            <TechnologySection techList={techList}></TechnologySection>
        </InfoSection>
    );
}
