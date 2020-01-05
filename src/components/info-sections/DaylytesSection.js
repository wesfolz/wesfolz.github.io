import React from 'react';

import Daylytes from 'images/daylytes.svg';
import Gradient from 'images/gradient.png';
import TeamSection from 'images/team_section.png';
import ContactForm from 'images/contact_form.png';
import Blog from 'images/blog.png';
import Redux from 'images/logos/redux.svg';
import Rails from 'images/logos/rails.png';
import Postgres from 'images/logos/postgresql.svg';
import Heroku from 'images/logos/heroku.svg';
import Figma from 'images/logos/figma.png';

import Colors from 'styles/Colors';
import InfoSection from 'components/info-sections/InfoSection';
import ParallaxImage from 'components/animated/ParallaxImage';
import TechnologySection from 'components/tech-section/TechnologySection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TechIcon from 'components/tech-section/TechIcon';
import InfoGrid from 'components/info-sections/InfoGrid';
import { SectionTitle, SectionText, InlineButton } from 'components/info-sections/SectionStyles';
import ParallaxInfoContainer from 'components/animated/ParallaxInfoContainer';

export default function DaylytesSection(props) {

    const techList = [
        {
            icon: <FontAwesomeIcon icon={['fab', 'react']} color={Colors.react} size="3x"></FontAwesomeIcon>,
            title: 'React Native'
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
            icon: <FontAwesomeIcon icon={['fab', 'aws']} color={Colors.aws} size="3x"></FontAwesomeIcon>,
            title: 'Amazon Web Services'
        },
        {
            icon: <TechIcon src={Figma}></TechIcon>,
            title: 'Figma'
        },
    ];

    const platformList = [
        {
            icon: <FontAwesomeIcon icon={['fab', 'apple']} color={Colors.ios} size="3x"></FontAwesomeIcon>,
            title: 'iOS'
        },
        {
            icon: <FontAwesomeIcon icon={['fab', 'android']} color={Colors.android} size="3x"></FontAwesomeIcon>,
            title: 'Android'
        },
    ];

    const rows = [
        {
            image: (
                <ParallaxInfoContainer>
                    <ParallaxImage backgroundImage={Gradient}></ParallaxImage>
                </ParallaxInfoContainer>
            ),
            text: (
                <SectionText>
                    I created an adaptive css gradient background that rescales and repositions itself depending on the width of the browser window.
                </SectionText>
            ),
            title: 'Gradient Background'
        },
        {
            image: (
                <ParallaxInfoContainer>
                    <ParallaxImage backgroundImage={TeamSection} backgroundColor="black"></ParallaxImage>
                </ParallaxInfoContainer>
            ),
            text: (
                <SectionText>
                    I added a new interactive team info section with custom transition animations.
                </SectionText>
            ),
            title: 'Team Section'
        },
        {
            image: (
                <ParallaxInfoContainer>
                    <ParallaxImage backgroundImage={Blog} backgroundColor="black"></ParallaxImage>
                </ParallaxInfoContainer>
            ),
            text: (
                <SectionText>
                    I added and updated the content for the blog section and many of the case studies.
                </SectionText>
            ),
            title: 'New Content'
        },
        {
            image: (
                <ParallaxInfoContainer>
                    <ParallaxImage backgroundImage={ContactForm} backgroundColor="black"></ParallaxImage>
                </ParallaxInfoContainer>
            ),
            text: (
                <SectionText>
                    I updated the contact form with new styling and validation logic.
                </SectionText>
            ),
            title: 'Contact Form'
        }
    ];

    return (
        <InfoSection
            infoTitle="Daylytes, Inc"
            infoSubtitle="Software Engineer"
            backgroundImage={Daylytes}
            backgroundColor={Colors.daylytes}
            exitColor={'black'}
            {...props}>
            <SectionTitle>Summary</SectionTitle>
            <SectionText>
                <InlineButton color={Colors.daylytes}>
                    <a href="https://daylytes.com/">Daylytes</a>
                </InlineButton>  is a small digital agency that designs and builds websites and mobile apps.
                Recently they redesigned their website and I was hired to implement the new design changes.
                I added new features, new content, new styling and even fixed a few bugs.
            </SectionText>
            <SectionTitle>Major Features</SectionTitle>
            <InfoGrid rows={rows}>
            </InfoGrid>
            <SectionTitle>Technology</SectionTitle>
            <TechnologySection techList={techList}>
            </TechnologySection>
            <SectionTitle>Supported Platforms</SectionTitle>
            <TechnologySection techList={platformList}>
            </TechnologySection>
        </InfoSection>
    );
}
