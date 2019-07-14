import React from 'react';

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

import Colors from 'styles/Colors';
import InfoSection from 'components/info-sections/InfoSection';
import ParallaxImage from 'components/animated/ParallaxImage';
import TechnologySection from 'components/tech-section/TechnologySection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TechIcon from 'components/tech-section/TechIcon';
import InfoGrid from 'components/info-sections/InfoGrid';
import { SectionTitle, SectionText, InlineButton } from 'components/info-sections/SectionStyles';
import ParallaxInfoContainer from 'components/animated/ParallaxInfoContainer';

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
            infoTitle="Stratosphere Digital"
            infoSubtitle="Independent Contractor"
            backgroundImage={Stratosphere}
            backgroundColor="black"
            exitColor={Colors.stratosphere}
            {...props}>
            <SectionTitle>Summary</SectionTitle>
            <SectionText>
                <InlineButton color={Colors.stratosphere}>
                    <a href="https://stratosphere.digital/">Stratosphere Digital</a>
                </InlineButton>  is a small digital agency that designs and builds websites and mobile apps.
                Recently they redesigned their website and I was hired to implement the new design changes.
                I added new features, new content, new styling and even fixed a few bugs.
            </SectionText>
            <SectionTitle>Major Features</SectionTitle>
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
