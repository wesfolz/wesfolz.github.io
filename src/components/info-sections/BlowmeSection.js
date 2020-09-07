import React from "react";

import Scavenger from "images/scavenger.svg";
import Proposal from "images/proposal.jpg";
import Blowme from "images/blowme.png";

import FirebaseLogo from "images/logos/firebase.svg";
import MapsLogo from "images/logos/google-maps.svg";
import BootstrapLogo from "images/logos/bootstrap.svg";

import Colors from "styles/Colors.js";
import InfoSection from "components/info-sections/InfoSection";
import ParallaxInfoImage from "components/animated/ParallaxInfoImage";
import TechnologySection from "components/tech-section/TechnologySection";
import TechIcon from "components/tech-section/TechIcon";
import InfoGrid from "components/info-sections/InfoGrid";
import {
  SectionTitle,
  SectionText,
  InlineButton,
  FullRowImage,
} from "components/info-sections/SectionStyles";

export default function BlowmeSection(props) {
  const techList = [
    {
      icon: <TechIcon src={BootstrapLogo}></TechIcon>,
      title: "Bootstrap",
    },
    {
      icon: <TechIcon src={FirebaseLogo}></TechIcon>,
      title: "Firebase",
    },
    {
      icon: <TechIcon src={MapsLogo}></TechIcon>,
      title: "Google Maps API",
    },
  ];

  const appRows = [
    {
      content: (
        <React.Fragment>
          <ParallaxInfoImage
            backgroundImage={Blowme}
            backgroundColor="black"
            overlayColor="#EB2532"
            href="https://github.com/wesfolz/ScavengerApp"
          ></ParallaxInfoImage>
          <SectionText>
            I created a set of clues for her to solve. Some of the clues
            required her to enter answers to questions and for others she needed
            to go to specific destinations. The location-based clues would
            automatically unlock once her gps position showed she was close
            enough to the specific destination.
          </SectionText>
        </React.Fragment>
      ),
      title: "Clues",
    },
  ];

  const resultRows = [
    {
      content: <FullRowImage src={Proposal}></FullRowImage>,
      title: "She said yes!",
    },
  ];

  return (
    <InfoSection
      infoTitle="I Got Engaged!"
      infoSubtitle="And Built An App"
      backgroundImage={Scavenger}
      backgroundColor={"black"}
      exitColor={Colors.scavenger}
      {...props}
    >
      <SectionTitle>The Story</SectionTitle>
      <SectionText>
        I was planning to ask my girlfriend to marry me, but I wanted the
        proposal to be special and unique. I thought it would be a cool idea to
        send her on a scavenger hunt to different places that we like to spend
        time together. Thinking about the logistics of setting up the hunt
        seemed impractical and prone to errors, but then I realized that I’m an
        engineer, so I wrote software to handle the logistics for me.
      </SectionText>
      <SectionTitle>The Mobile App</SectionTitle>
      <InfoGrid rows={appRows}></InfoGrid>
      <SectionTitle>Technology Stack</SectionTitle>
      <TechnologySection techList={techList}></TechnologySection>
    </InfoSection>
  );
}
