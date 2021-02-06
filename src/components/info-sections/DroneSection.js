import React from 'react';
import { FaReact } from 'react-icons/fa';

import RaspberryDrone from 'images/raspberry_drone.svg';
import Drone from 'images/drone.jpg';
import DroneApp from 'images/drone_app.png';

import PythonLogo from 'images/logos/python.svg';
import FlaskLogo from 'images/logos/flask.svg';

import Colors from 'styles/Colors.js';
import InfoSection from 'components/info-sections/InfoSection';
import ParallaxInfoImage from 'components/animated/ParallaxInfoImage';
import TechnologySection from 'components/tech-section/TechnologySection';
import TechIcon from 'components/tech-section/TechIcon';
import InfoGrid from 'components/info-sections/InfoGrid';
import {
  SectionTitle,
  SectionText
} from 'components/info-sections/SectionStyles';

const techList = [
  {
    icon: <FaReact size={56} color={Colors.react} />,
    title: 'React Native'
  },
  {
    icon: <TechIcon src={PythonLogo}></TechIcon>,
    title: 'Python'
  },
  {
    icon: <TechIcon src={FlaskLogo}></TechIcon>,
    title: 'Flask'
  }
];

const appRows = [
  {
    image: (
      <ParallaxInfoImage
        backgroundImage={Drone}
        backgroundColor='black'
        overlayColor={Colors.drone}
        href='https://github.com/wesfolz/RaspberryDronePi'
      ></ParallaxInfoImage>
    ),
    text: (
      <SectionText>
        I used the DroneKit Python API to send commands from the Raspberry Pi to
        the flight controller over USB. I wrote a Flask web server to stream
        video from the Raspberry Pi camera and to accept websocket commands from
        a client application.
      </SectionText>
    ),
    title: 'The Backend'
  },
  {
    image: (
      <ParallaxInfoImage
        backgroundImage={DroneApp}
        overlayColor={Colors.drone}
        href='https://github.com/wesfolz/RaspberryDroneApp'
      ></ParallaxInfoImage>
    ),
    text: (
      <SectionText>
        I built an Android app that connected to the Raspberry Pi web server to
        control the drone and view the video stream coming from the Raspberry Pi
        camera.
      </SectionText>
    ),
    title: 'The Frontend'
  }
];

export default function EngagementSection(props) {
  return (
    <InfoSection
      infoTitle='Raspberry Pi Drone'
      infoSubtitle='Android App'
      backgroundImage={RaspberryDrone}
      backgroundColor={Colors.drone}
      exitColor={Colors.raspberry}
      {...props}
    >
      <SectionTitle>Summary</SectionTitle>
      <SectionText>
        I built a drone with an APM 2.8 flight controller and a Raspberry Pi. I
        also built an Android app to control the drone with my phone.
      </SectionText>
      <SectionTitle>Capabilities</SectionTitle>
      <InfoGrid rows={appRows}></InfoGrid>
      <SectionTitle>Technology Stack</SectionTitle>
      <TechnologySection techList={techList}></TechnologySection>
    </InfoSection>
  );
}
