import React from "react";

import Daylights from "images/daylights.svg";
import DaylightsSubscriber from "images/daylights_subscriber.png";
import DaylytesPost from "images/daylytes_post.png";
import DaylytesHome from "images/daylytes_home.png";
import Redux from "images/logos/redux.svg";
import Rails from "images/logos/rails.png";
import Postgres from "images/logos/postgresql.svg";
import Heroku from "images/logos/heroku.svg";
import Figma from "images/logos/figma.png";
import Elastic from "images/logos/elasticsearch.svg";
import Chrome from "images/logos/chrome.svg";
import Firefox from "images/logos/firefox.svg";
import Safari from "images/logos/safari.svg";

import Colors from "styles/Colors";
import InfoSection from "components/info-sections/InfoSection";
import ParallaxImage from "components/animated/ParallaxImage";
import TechnologySection from "components/tech-section/TechnologySection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TechIcon from "components/tech-section/TechIcon";
import InfoGrid from "components/info-sections/InfoGrid";
import {
  SectionTitle,
  SectionText,
  InlineButton,
} from "components/info-sections/SectionStyles";
import ParallaxInfoContainer from "components/animated/ParallaxInfoContainer";

export default function DaylightsSection(props) {
  const techList = [
    {
      icon: (
        <FontAwesomeIcon
          icon={["fab", "react"]}
          color={Colors.react}
          size="3x"
        ></FontAwesomeIcon>
      ),
      title: "React",
    },
    {
      icon: <TechIcon src={Redux}></TechIcon>,
      title: "Redux",
    },
    {
      icon: <TechIcon src={Rails}></TechIcon>,
      title: "Ruby on Rails",
    },
    {
      icon: <TechIcon src={Postgres}></TechIcon>,
      title: "PostgreSQL",
    },
    {
      icon: <TechIcon src={Heroku}></TechIcon>,
      title: "Heroku",
    },
    {
      icon: <TechIcon src={Elastic} />,
      title: "Elastic",
    },
    {
      icon: <TechIcon src={Figma}></TechIcon>,
      title: "Figma",
    },
  ];

  const platformList = [
    {
      icon: <TechIcon src={Chrome}></TechIcon>,
      title: "Chrome",
    },
    {
      icon: <TechIcon src={Firefox}></TechIcon>,
      title: "Firefox",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={["fab", "edge"]}
          color={Colors.edge}
          size="3x"
        ></FontAwesomeIcon>
      ),
      title: "Edge",
    },
    {
      icon: <TechIcon src={Safari}></TechIcon>,
      title: "Safari",
    },
  ];

  const rows = [
    {
      //http://onelink.to/4cnghx
      image: (
        <ParallaxInfoContainer>
          <ParallaxImage
            backgroundImage={DaylightsSubscriber}
            backgroundColor="black"
          ></ParallaxImage>
        </ParallaxInfoContainer>
      ),
      text: (
        <SectionText>
          I developed a social media sports app which was released to both the
          Apple App Store and Google Play Store. Notable features of the app
          included fullscreen, autoplaying videos, video and image posting, a
          video interview feature, inline tagging of other users, a profile
          section, following, liking, etc.
        </SectionText>
      ),
      title: "Cross-Platform Mobile App Development",
    },
    {
      image: (
        <ParallaxInfoContainer>
          <ParallaxImage
            backgroundImage={DaylytesPost}
            backgroundColor="black"
          ></ParallaxImage>
        </ParallaxInfoContainer>
      ),
      text: (
        <SectionText>
          I worked on the backend API and database architecture for the Daylytes
          mobile app. This included features such as token authentication, video
          and image upload processing, etc.
        </SectionText>
      ),
      title: "Mobile App Backend API",
    },
    {
      image: (
        <ParallaxInfoContainer>
          <ParallaxImage
            backgroundImage={DaylytesHome}
            backgroundColor="black"
          ></ParallaxImage>
        </ParallaxInfoContainer>
      ),
      text: (
        <SectionText>
          I worked with the marketing team to brainstorm and design product
          features that would accomplish specific marketing goals while also
          being technically feasible.
        </SectionText>
      ),
      title: "Business and Product Strategy",
    },
  ];

  return (
    <InfoSection
      infoTitle="Daylights, Inc"
      infoSubtitle="Software Engineer"
      backgroundImage={Daylights}
      backgroundColor={Colors.daylightsDark}
      exitColor={Colors.daylightsPrimary}
      {...props}
    >
      <SectionTitle>Summary</SectionTitle>
      <SectionText>
        <InlineButton color={Colors.daylightsPrimary}>
          <a href="https://daylytes.com/">Daylights</a>
        </InlineButton>{" "}
        is a VC funded sports media startup company. I was hired as a software
        engineer and was employee number three at the company. I worked on all
        aspects of the Daylytes mobile app. From generating product ideas, to
        UI/UX design, backend software architecture and finally implementation
        of the full technology stack.
      </SectionText>
      <SectionTitle>Job Duties</SectionTitle>
      <InfoGrid rows={rows} />
      <SectionTitle>Technology</SectionTitle>
      <TechnologySection techList={techList} />
      <SectionTitle>Supported Platforms</SectionTitle>
      <TechnologySection techList={platformList} />
    </InfoSection>
  );
}
