import React from 'react';
import styled from 'styled-components';

import Stratosphere from 'images/stratosphere.png';
import Gradient from 'images/gradient.png';
import TeamSection from 'images/team_section.png';
import ContactForm from 'images/contact_form.png';
import Blog from 'images/blog.png';
import Coffescript from 'images/logos/coffeescript.svg';
import Stylus from 'images/logos/stylus.svg';
import Handlebars from 'images/logos/handlebars.svg';
import Chrome from 'images/logos/chrome.svg';
import Firefox from 'images/logos/firefox.svg';
import Safari from 'images/logos/safari.svg';
import Git from 'images/logos/git.svg';

import Colors from 'styles/Colors';
import InfoSection from 'components/info-sections/InfoSection';
import ParallaxImage from 'components/ParallaxImage';
import TechnologySection from 'components/tech-section/TechnologySection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TechIcon from 'components/tech-section/TechIcon';
import InfoGrid from 'components/info-sections/InfoGrid';
import { SectionTitle, SectionText } from 'components/info-sections/SectionStyles';
import ParallaxInfoContainer from 'components/ParallaxInfoContainer';
import UnderlineButton from 'components/buttons/UnderlineButton';

const LinkSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 60px 0;
    padding: 20px 0;
    background-color: white;
    border-radius: 4px;
`;

export default function StratosphereSection(props) {

    const techList = [
        {
            icon: <TechIcon src={Handlebars}></TechIcon>,
            title: 'Handlebars'
        },
        {
            icon: <TechIcon src={Stylus}></TechIcon>,
            title: 'Stylus'
        },
        {
            icon: <TechIcon src={Coffescript}></TechIcon>,
            title: 'CoffeeScript'
        },
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
            icon: <FontAwesomeIcon icon={['fab', 'edge']} color={Colors.edge} size="3x"></FontAwesomeIcon>,
            title: 'Edge'
        },
        {
            icon: <TechIcon src={Safari}></TechIcon>,
            title: 'Safari'
        },
    ];

    const rows = [
        {
            content: (
                <React.Fragment>
                    <ParallaxInfoContainer>
                        <ParallaxImage backgroundImage={Gradient}></ParallaxImage>
                    </ParallaxInfoContainer>
                    <SectionText>I created an adaptive css gradient background that scales and repositions itself depending on the width of the browser window.
                    </SectionText>
                </React.Fragment>),
            title: 'Gradient Background'
        },
        {
            content: (
                <React.Fragment>
                    <SectionText>I added a new interactive team info section with custom transition animations.</SectionText>
                    <ParallaxInfoContainer>
                        <ParallaxImage backgroundImage={TeamSection} backgroundColor="black"></ParallaxImage>
                    </ParallaxInfoContainer>
                </React.Fragment>),
            title: 'Team Section'
        },
        {
            content: (
                <React.Fragment>
                    <ParallaxInfoContainer>
                        <ParallaxImage backgroundImage={ContactForm} backgroundColor="black"></ParallaxImage>
                    </ParallaxInfoContainer>
                    <SectionText>I updated the contact form with new styling and validation logic.</SectionText>
                </React.Fragment>),
            title: 'Contact Form'
        },
        {
            content: (
                <React.Fragment>
                    <SectionText>I added and updated the content for the blog section and many of the case studies.</SectionText>
                    <ParallaxInfoContainer>
                        <ParallaxImage backgroundImage={Blog} backgroundColor="black"></ParallaxImage>
                    </ParallaxInfoContainer>
                </React.Fragment>),
            title: 'New Content'
        }
    ];

    return (
        <InfoSection backgroundImage={Stratosphere} backgroundColor="black" exit={props.exit} exitColor={Colors.stratosphere}>
            <SectionTitle>Summary</SectionTitle>
            <SectionText>Stratosphere digital hired me to update their website with new content and features based on new design specifications.</SectionText>
            <LinkSection>
                <UnderlineButton color={Colors.stratosphere}>
                    <a href="https://stratosphere.digital/">Visit Website</a>
                </UnderlineButton>
            </LinkSection>
            <SectionTitle>Features</SectionTitle>
            <InfoGrid rows={rows}>
            </InfoGrid>
            <SectionTitle>Development Stack</SectionTitle>
            <TechnologySection techList={techList}>
            </TechnologySection>
            <SectionTitle>Supported Platforms</SectionTitle>
            <TechnologySection techList={platformList}>
            </TechnologySection>
        </InfoSection>
    );
}
