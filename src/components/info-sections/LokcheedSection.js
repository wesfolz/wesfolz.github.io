import React from 'react';
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJira,
  FaLinux,
  FaWindows
} from 'react-icons/fa';

import Lockheed from 'images/lockheed.jpg';
import Orion from 'images/orion.jpg';
import LAS from 'images/las.jpg';
import Scrum from 'images/scrum.png';
import Data from 'images/big-data.jpg';
import Debug from 'images/debug.jpg';
import Elastic from 'images/logos/elasticsearch.svg';
import Labview from 'images/logos/labview.svg';
import Python from 'images/logos/python.svg';
import Javascript from 'images/logos/javascript.svg';
import Cpp from 'images/logos/c++.svg';
import Bootstrap from 'images/logos/bootstrap.svg';
import Jquery from 'images/logos/jquery.svg';
import Git from 'images/logos/git.svg';
import Redux from 'images/logos/redux.svg';

import Colors from 'styles/Colors';
import InfoSection from 'components/info-sections/InfoSection';
import ParallaxInfoImage from 'components/animated/ParallaxInfoImage';
import TechnologySection from 'components/tech-section/TechnologySection';
import TechIcon from 'components/tech-section/TechIcon';
import InfoGrid from 'components/info-sections/InfoGrid';
import {
  SectionTitle,
  SectionText,
  InlineButton
} from 'components/info-sections/SectionStyles';

const techList = [
  {
    icon: <FaJava size={56} color={Colors.java} />,
    title: 'Java'
  },
  {
    icon: <FaHtml5 color='red' size={56} />,
    title: 'HTML'
  },
  {
    icon: <FaCss3Alt size={48} color='blue' />,
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
    icon: <FaReact size={56} color={Colors.react} />,
    title: 'React'
  },
  {
    icon: <TechIcon src={Redux}></TechIcon>,
    title: 'Redux'
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
    title: 'Git'
  },
  {
    icon: <FaJira color={Colors.jira} size={56} />,
    title: 'Jira'
  }
];

const platformList = [
  {
    icon: <FaLinux size={56} color='black' />,
    title: 'Linux'
  },
  {
    icon: <FaWindows color={Colors.windows} size={56} />,
    title: 'Windows'
  }
];

const rows = [
  {
    image: (
      <ParallaxInfoImage
        backgroundImage={Orion}
        overlayColor={Colors.lockheed}
        href='https://www.lockheedmartin.com/en-us/products/orion.html'
      />
    ),
    text: (
      <SectionText>
        I developed and maintained Big Data web applications for retrieval and
        visualization of telemetry data for spacecrafts and satellites such as
        Orion and GOES-R. For this team I worked as a full stack engineer
        contributing to a wide array of features. I redesigned and implemented
        the UIs for plotting data, building queries and searching for telemetry.
        I improved performance of telemetry database queries by a factor of 10.
      </SectionText>
    ),
    title: 'Full Stack Web Development'
  },
  {
    image: (
      <ParallaxInfoImage
        backgroundImage={Data}
        overlayColor={Colors.lockheed}
        href='https://en.wikipedia.org/wiki/Big_data'
      />
    ),
    text: (
      <SectionText>
        I generated the requirements and created the architecture for a new
        visualization application. I built prototype applications to test out
        new technologies for searching and visualizing large datasets.
      </SectionText>
    ),
    title: 'Big Data Visualization'
  },
  {
    image: (
      <ParallaxInfoImage
        backgroundImage={LAS}
        overlayColor={Colors.lockheed}
        href='https://www.youtube.com/watch?v=4rfsDMGplZU'
      />
    ),
    text: (
      <SectionText>
        I wrote software for embedded applications that controlled electrical
        electrical ground support equipment for testing different functions of
        the Orion Multi-Purpose Crew Vehicle and Launch Abort System. I designed
        and implemented innovative UIs for new testing applications. I developed
        an application to power and retrieve data from different flight
        computers for post-landing data analysis.
      </SectionText>
    ),
    title: 'Embedded Programming'
  },
  {
    image: (
      <ParallaxInfoImage
        backgroundImage={Debug}
        overlayColor={Colors.lockheed}
        href='https://en.wikipedia.org/wiki/Debugging#Origin_of_the_term'
      />
    ),
    text: (
      <SectionText>
        I debugged and fixed many difficult issues in systems involving both
        software and hardware components. In one instance I tracked down a
        firmware bug in a serial communication card from one of our vendors.
      </SectionText>
    ),
    title: 'Advanced Debugging'
  },
  {
    image: (
      <ParallaxInfoImage
        backgroundImage={Scrum}
        overlayColor={Colors.lockheed}
        href='https://www.scrum.org/'
      />
    ),
    text: (
      <SectionText>
        I served as the Scrum Master for my Agile software development team. I
        was in charge of running daily meetings, and coordinating dependencies
        with other teams. I also managed our Jira dashboard and participated in
        software peer reviews.
      </SectionText>
    ),
    title: 'Scrum Master'
  }
];

export default function LokcheedSection(props) {
  return (
    <InfoSection
      infoTitle='Lockheed Martin'
      infoSubtitle='Software Engineer'
      backgroundImage={Lockheed}
      backgroundColor={Colors.lockheed}
      {...props}
    >
      <SectionTitle>Summary</SectionTitle>
      <SectionText>
        Lockheed Martin is a multi-billion dollar aerospace and defense company.
        I was a software engineer for&nbsp;
        <InlineButton color={Colors.lockheed}>
          <a href='https://www.lockheedmartin.com/en-us/capabilities/space.html'>
            Lockheed Martin Space Systems
          </a>
        </InlineButton>
        &nbsp;from 2016 - 2019. In my time there, I worked on two different
        teams, doing both embedded programming and full stack web development.
      </SectionText>
      <SectionTitle>Job Duties</SectionTitle>
      <InfoGrid rows={rows}></InfoGrid>
      <SectionTitle>Technology</SectionTitle>
      <TechnologySection techList={techList}></TechnologySection>
      <SectionTitle>Development Platforms</SectionTitle>
      <TechnologySection techList={platformList}></TechnologySection>
    </InfoSection>
  );
}
