import React from 'react';

import Daylights from 'images/daylights.svg';
import DaylightsSubscriber from 'images/daylights_subscriber.png';
import Octagon from 'images/octagon.png';
import DaylightsPublisher from 'images/publisher.png';
import Redux from 'images/logos/redux.svg';
import Rails from 'images/logos/rails.png';
import Postgres from 'images/logos/postgresql.svg';
import Heroku from 'images/logos/heroku.svg';
import Figma from 'images/logos/figma.png';
import Elastic from 'images/logos/elasticsearch.svg';
import Chrome from 'images/logos/chrome.svg';
import Firefox from 'images/logos/firefox.svg';
import Safari from 'images/logos/safari.svg';

import Colors from 'styles/Colors';
import InfoSection from 'components/info-sections/InfoSection';
import ParallaxImage from 'components/animated/ParallaxImage';
import TechnologySection from 'components/tech-section/TechnologySection';
import { FaReact } from 'react-icons/fa';
import { GrEdge } from 'react-icons/gr';
import TechIcon from 'components/tech-section/TechIcon';
import InfoGrid from 'components/info-sections/InfoGrid';
import {
  SectionTitle,
  SectionText,
  InlineButton
} from 'components/info-sections/SectionStyles';
import ParallaxInfoContainer from 'components/animated/ParallaxInfoContainer';

const techList = [
  {
    icon: <FaReact size={56} color={Colors.react} />,
    title: 'React'
  },
  {
    icon: <TechIcon src={Redux}></TechIcon>,
    title: 'Redux'
  },
  {
    icon: <TechIcon src={Rails}></TechIcon>,
    title: 'Ruby on Rails'
  },
  {
    icon: <TechIcon src={Postgres}></TechIcon>,
    title: 'PostgreSQL'
  },
  {
    icon: <TechIcon src={Heroku}></TechIcon>,
    title: 'Heroku'
  },
  {
    icon: <TechIcon src={Elastic} />,
    title: 'Elastic'
  },
  {
    icon: <TechIcon src={Figma}></TechIcon>,
    title: 'Figma'
  }
];

const platformList = [
  {
    icon: <TechIcon src={Chrome}></TechIcon>,
    title: 'Chrome'
  },
  {
    icon: <TechIcon src={Firefox}></TechIcon>,
    title: 'Firefox'
  },
  {
    icon: <GrEdge size={48} color={Colors.edge} />,
    title: 'Edge'
  },
  {
    icon: <TechIcon src={Safari}></TechIcon>,
    title: 'Safari'
  }
];

const rows = [
  {
    image: (
      <ParallaxInfoContainer>
        <ParallaxImage
          backgroundImage={DaylightsSubscriber}
          backgroundColor='black'
        />
      </ParallaxInfoContainer>
    ),
    text: (
      <SectionText>
        I built the company website and designed and developed the customer
        onboarding system. The onboarding system allowed for customers to search
        across hundreds of thousands of athletes and teams to create a
        personalized daily newsletter.
      </SectionText>
    ),
    title: 'Personalized Email Service'
  },
  {
    image: (
      <ParallaxInfoContainer>
        <ParallaxImage backgroundImage={Octagon} />
      </ParallaxInfoContainer>
    ),
    text: (
      <SectionText>
        I developed a web scraping system to automatically gather personalized
        sports content, and deliver it to people in html emails. The system
        scraped news, schedules and scores from many sources such as Google,
        Twitter, college sports websites, etc. The admin dashboard allowed
        employees to easily edit and curate content before delivery.
      </SectionText>
    ),
    title: 'Web Scraping System'
  },
  {
    image: (
      <ParallaxInfoContainer>
        <ParallaxImage backgroundImage={DaylightsPublisher} />
      </ParallaxInfoContainer>
    ),
    text: (
      <SectionText>
        I developed a publisher platform where independent sports journalists
        could use our rich text editor to write articles and include them in our
        customer's emails.
      </SectionText>
    ),
    title: 'Publisher Platform'
  }
];

export default function DaylightsSection(props) {
  return (
    <InfoSection
      infoTitle='Daylights, Inc'
      infoSubtitle='Software Engineer'
      backgroundImage={Daylights}
      backgroundColor={Colors.daylightsDark}
      exitColor={Colors.daylightsPrimary}
      {...props}
    >
      <SectionTitle>Summary</SectionTitle>
      <SectionText>
        Daylights (formerly Daylytes) was a VC funded sports media startup company. I
        was hired as a software engineer and was employee number three at the
        company. I developed the software for the Daylights personalized sports
        email service.
      </SectionText>
      <SectionTitle>Projects</SectionTitle>
      <InfoGrid rows={rows} />
      <SectionTitle>Technology</SectionTitle>
      <TechnologySection techList={techList} />
      <SectionTitle>Supported Platforms</SectionTitle>
      <TechnologySection techList={platformList} />
    </InfoSection>
  );
}
