import React from 'react';
import { FaReact } from 'react-icons/fa';

import Scavenger from 'images/scavenger.svg';
import ScavengerChat from 'images/scavenger-chat.png';
import ScavengerWeb from 'images/scavenger-web.jpg';
import ScavengerClue from 'images/scavenger-clue.png';
import Proposal from 'images/proposal.jpg';

import ScavengerChatSmall from 'images/scavenger-chat_small.jpg';
import ScavengerWebSmall from 'images/scavenger-web_small.jpg';
import ScavengerClueSmall from 'images/scavenger-clue_small.jpg';
import ProposalSmall from 'images/proposal_small.jpg';

import FirebaseLogo from 'images/logos/firebase.svg';
import MapsLogo from 'images/logos/google-maps.svg';
import BootstrapLogo from 'images/logos/bootstrap.svg';

import Colors from 'styles/Colors.js';
import InfoSection from 'components/info-sections/InfoSection';
import ParallaxImage from 'components/animated/ParallaxImage';
import ParallaxInfoContainer from 'components/animated/ParallaxInfoContainer';
import ParallaxInfoImage from 'components/animated/ParallaxInfoImage';
import TechnologySection from 'components/tech-section/TechnologySection';
import TechIcon from 'components/tech-section/TechIcon';
import InfoGrid from 'components/info-sections/InfoGrid';
import {
  SectionTitle,
  SectionText,
  FullRowImage,
  FullImageContainer,
  FullRowImageBlurred
} from 'components/info-sections/SectionStyles';
import useProgressiveImage from 'hooks/useProgressiveImage';

const techList = [
  {
    icon: <FaReact size={56} color={Colors.react} />,
    title: 'React/React Native'
  },
  {
    icon: <TechIcon src={BootstrapLogo}></TechIcon>,
    title: 'Bootstrap'
  },
  {
    icon: <TechIcon src={FirebaseLogo}></TechIcon>,
    title: 'Firebase'
  },
  {
    icon: <TechIcon src={MapsLogo}></TechIcon>,
    title: 'Google Maps API'
  }
];

const appRows = [
  {
    image: (
      <ParallaxInfoImage
        backgroundImage={ScavengerClue}
        smallBackgroundImage={ScavengerClueSmall}
        backgroundColor='black'
        overlayColor={Colors.info}
        href='https://github.com/wesfolz/ScavengerApp'
      />
    ),
    text: (
      <SectionText>
        I created a storyline which would set the scene for a series of clues
        she had to solve. Some of the clues required her to enter answers to
        questions and for others she needed to drive to specific destinations.
        The location-based clues would automatically unlock once her gps
        position showed she was close enough to the specific destination. After
        she worked her way through all the tasks, she found me on my knee.
      </SectionText>
    ),
    title: 'Clues'
  },
  {
    image: (
      <ParallaxInfoContainer>
        <ParallaxImage
          backgroundImage={ScavengerChat}
          smallBackgroundImage={ScavengerChatSmall}
          backgroundColor='black'
        />
      </ParallaxInfoContainer>
    ),
    text: (
      <SectionText>
        I added a real-time chat feature to the app so if she was stumped by a
        particular clue she could ask me (disguised as my dog Peach) for help.
        This came in handy once or twice and really saved the day. At one point,
        she thought one of the clues was at home (which was very incorrect and
        would have ruined the surprise) but after consulting Peach, she was back
        on track.
      </SectionText>
    ),
    title: 'Real-time Chat'
  }
];

const webRows = [
  {
    image: (
      <ParallaxInfoImage
        backgroundImage={ScavengerWeb}
        smallBackgroundImage={ScavengerWebSmall}
        overlayColor={Colors.info}
        href='https://github.com/wesfolz/scavenger-web'
      />
    ),
    text: (
      <SectionText>
        I built a web app so that I could monitor how many clues she had solved,
        communicate with her via the instant chat interface and track her
        location in real time from my computer. This feature took the guesswork
        out of setting up her final surprise.
      </SectionText>
    ),
    title: 'Location Tracking'
  }
];

export default function EngagementSection(props) {
  const loadingProposalImage = useProgressiveImage({ imgSrc: Proposal });

  return (
    <InfoSection
      infoTitle='I Got Engaged!'
      infoSubtitle='And Built An App'
      backgroundImage={Scavenger}
      backgroundColor={'black'}
      exitColor={Colors.scavenger}
      {...props}
    >
      <SectionTitle>The Story</SectionTitle>
      <SectionText>
        I was planning to ask my girlfriend of seven years to marry me, but I
        wanted the proposal to be special and unique. I thought it would be a
        cool idea to send her on a scavenger hunt to different places that held
        significance in our relationship. Thinking about the logistics of
        setting up the hunt seemed impractical and prone to errors, but then I
        remembered that I’m an engineer, so I wrote software to handle the
        logistics for me.
      </SectionText>
      <SectionTitle>The Mobile App</SectionTitle>
      <InfoGrid rows={appRows} />
      <SectionTitle>The Web App</SectionTitle>
      <InfoGrid rows={webRows} />
      <SectionTitle>Technology Stack</SectionTitle>
      <TechnologySection techList={techList} />
      <SectionTitle>The Result</SectionTitle>
      <FullImageContainer>
        <h4>She said yes!</h4>
        <FullRowImageBlurred src={ProposalSmall} blur opacity={loadingProposalImage ? 1 : 0} style={{ top: '70px', left: '0', height: 'calc(100% - 70px)' }} />
        <FullRowImage src={Proposal} opacity={loadingProposalImage ? 0 : 1} />
      </FullImageContainer>
    </InfoSection>
  );
}
