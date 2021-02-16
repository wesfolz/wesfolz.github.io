import React from 'react';
import { FaJava, FaAndroid, FaLinux, FaWindows } from 'react-icons/fa';

import Sandia from 'images/sandia.svg';
import Maccs from 'images/maccs.jpg';
import Santeria from 'images/santeria.jpg';
import Rtree from 'images/rtree.png';
import MaccsSmall from 'images/maccs_small.jpg';
import SanteriaSmall from 'images/santeria_small.jpg';
import RtreeSmall from 'images/rtree_small.jpg';
import MaccsPoster from 'images/MACCS_Poster.pdf';
import SanteriaPoster from 'images/Santeria_Poster.pdf';
import AdHocPoster from 'images/Ad_Hoc_Poster.pdf';
import Cpp from 'images/logos/c++.svg';
import Javascript from 'images/logos/javascript.svg';
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
    icon: <TechIcon src={Cpp}></TechIcon>,
    title: 'C/C++'
  },
  {
    icon: <TechIcon src={Javascript}></TechIcon>,
    title: 'JavaScript'
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
  },
  {
    icon: <FaAndroid color={Colors.android} size={56} />,
    title: 'Android'
  }
];

const rows = [
  {
    image: (
      <ParallaxInfoImage
        backgroundImage={Maccs}
        smallBackgroundImage={MaccsSmall}
        overlayColor={Colors.sandia}
        href={MaccsPoster}
      />
    ),
    text: (
      <SectionText>
        I developed and enhanced Java applications for nuclear scientists and
        incident responders. Most notably I created an application that mapped
        and animated radiation plumes. The application was also able to capture
        screenshots and record videos of the radiation plume animations among
        other features.
      </SectionText>
    ),
    title: 'Nuclear Incident Response Software'
  },
  {
    image: (
      <ParallaxInfoImage
        backgroundImage={Rtree}
        smallBackgroundImage={RtreeSmall}
        overlayColor={Colors.sandia}
        href={AdHocPoster}
        backgroundColor='white'
      />
    ),
    text: (
      <SectionText>
        A fellow intern and I simulated mobile ad-hoc networks using OPNET
        modeler to evaluate the performance of different routing protocols. We
        were able to improve the simulations by implementing a probabilistic
        model of daily human mobility patterns. We also developed an R-Tree data
        structure to more efficiently search for nearest neighbors in a network
        via spatial indexing.
      </SectionText>
    ),
    title: 'Ad Hoc Mobile'
  },
  {
    image: (
      <ParallaxInfoImage
        backgroundImage={Santeria}
        smallBackgroundImage={SanteriaSmall}
        overlayColor={Colors.sandia}
        href={SanteriaPoster}
        backgroundColor="white"
      />
    ),
    text: (
      <SectionText>
        I assisted researchers with development and testing of their Android
        kernel debugger. Another intern and I developed a GDB wrapper to send
        GDB and ADB commands to an Android device. I also developed an
        application that could load our custom kernel module onto an Android
        device with the press of a button.
      </SectionText>
    ),
    title: 'Android Kernel Debugger'
  }
];

export default function SandiaSection(props) {
  return (
    <InfoSection
      infoTitle='Sandia Labs'
      infoSubtitle='Technical Intern'
      backgroundImage={Sandia}
      backgroundColor={Colors.sandia}
      {...props}
    >
      <SectionTitle>Summary</SectionTitle>
      <SectionText>
        Sandia National Laboratories is a Federally Funded Research and
        Development Center which mostly focuses on energy and defense. I was an
        intern in the&nbsp;
        <InlineButton color={Colors.sandia}>
          <a href='https://www.sandia.gov/careers/students_postdocs/internships/institutes/cyber_defenders.html'>
            Center for Cyber Defenders
          </a>
        </InlineButton>
        &nbsp;program at Sandia for two years during college. I worked full time
        during the summers and part time during the school year. During my time
        there I worked on three different software projects.
      </SectionText>
      <SectionTitle>Projects</SectionTitle>
      <InfoGrid rows={rows}></InfoGrid>
      <SectionTitle>Programming Languages</SectionTitle>
      <TechnologySection techList={techList}></TechnologySection>
      <SectionTitle>Development Platforms</SectionTitle>
      <TechnologySection techList={platformList}></TechnologySection>
    </InfoSection>
  );
}
