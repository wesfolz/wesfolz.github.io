import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import Lockheed from 'images/lockheed.jpg';
import Wildcat from 'images/wildcat.png';
import Sandia from 'images/sandia.png';
import Stratosphere from 'images/stratosphere.png';
import Scavenger from 'images/scavenger.svg';
import RaspberryDrone from 'images/raspberry_drone.png';
import Colors from 'styles/Colors';

import TimelineEvent from 'components/timeline/TimelineEvent';
import LokcheedSection from 'components/info-sections/LokcheedSection';
import SandiaSection from 'components/info-sections/SandiaSection';
import CollegeSection from 'components/info-sections/CollegeSection';
import StratosphereSection from 'components/info-sections/StratosphereSection';
import EngagementSection from 'components/info-sections/EngagementSection';
import BlowmeSection from 'components/info-sections/BlowmeSection';
import DroneSection from 'components/info-sections/DroneSection';


const TRANSITION_TIME = 0.75;
const INITIAL_SCALE = 0.25;
const TIMELINE_WIDTH = 100 / INITIAL_SCALE;
const LINE_WIDTH = 6 / INITIAL_SCALE;
const WIDTH_MULTIPLIER = 1.5;

const TIMELINE_EVENTS = {
    COLLEGE: 1,
    SANDIA: 2,
    LOCKHEED: 3,
    STRATOSPHERE: 4,
    ENGAGEMENT: 5,
    BLOWME: 6,
    DRONE: 7
};

const OverflowHidden = styled.div`
    overflow-y: ${props => props.overflowHidden ? 'hidden' : 'unset'};
    height: 100vh;
    width: 100vw;
`;

const TimelineContainer = styled.div`
    display: flex;
    justify-content: center;
    /* align-items: center; */
    height: 100vh;
    /* transform-origin: 0; */
    opacity: ${props => props.opacity};
    transform: translate3d(${props => props.translation.x}, ${props => props.translation.y}, 0) scale(${props => props.scale || 1});
    transition: all ${`${TRANSITION_TIME}s ease-in-out`};
    backface-visibility: hidden;
`;

const TimelineList = styled.ul`
    position: relative;
    top: ${`${-100 / (2 * INITIAL_SCALE) + 50}vh`};/*-450vh;*/
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: space-around;
    list-style-type: none;
    padding: ${`${20 / INITIAL_SCALE}px`} 0;
    box-sizing: border-box;
    margin: 0;
    height: ${`${100 / INITIAL_SCALE}%`};
    /* background-color: #ffffff80;
    padding: 0px 4px; */
    &::before {
        content: '';
        position: absolute;
        background-color: white;
        opacity: 0.5;
        top: 0;
        width: ${`${LINE_WIDTH}px`};
        height: ${`${100 / INITIAL_SCALE}%`};
    }
`;

const TimelineMarker = styled.li`
    color: white;
    background-color: ${Colors.primary};
    z-index: 1;
    font-size: ${`${20 / INITIAL_SCALE}px`};
    padding: ${`${3 / INITIAL_SCALE}px`};
    border-radius: ${`${6 / INITIAL_SCALE}px`};
    @media (max-width: 768px) {
        font-size: ${`${16 / INITIAL_SCALE}px`};
    }
`;

const EventMarker = styled.div`
    position: absolute;
    top: ${props => props.top};
    left: ${props => `calc(${props.imageSize * (props.multiplier || WIDTH_MULTIPLIER) + LINE_WIDTH / 2}px + 50vw)`};
    &::before {
        content: '';
        position: absolute;
        border-top: ${`${LINE_WIDTH}px`} solid ${props => props.color};
        border-bottom: ${`${LINE_WIDTH}px`} solid ${props => props.color};
        border-right: ${`${LINE_WIDTH}px`} solid ${props => props.color};
        padding: ${props => `${props.height}vh`} ${props => `${props.imageSize * (props.multiplier / 2 || WIDTH_MULTIPLIER / 2) - LINE_WIDTH / 4}px`};
        left: ${props => `${-props.imageSize * (props.multiplier || WIDTH_MULTIPLIER)}px`};
        top: ${props => `calc(${-props.height}vh - ${INITIAL_SCALE * props.imageSize / 4}px)`};
        transition: all 0.3s ease-in-out;
        border-top-right-radius: ${`${LINE_WIDTH}px`} ;
        border-bottom-right-radius: ${`${LINE_WIDTH}px`} ;
    }
    &:hover {
        &::before {
            background-color: ${props => `${props.color}40`};
            transition: all 0.3s ease-in-out;
        }
    }
`;

const EventMarkerLeft = styled(EventMarker)`
    right: ${props => `calc(${props.imageSize * (props.multiplier || WIDTH_MULTIPLIER) + LINE_WIDTH / 2}px + 50vw)`};
    left: unset;
    &::before {
        border-left: ${`${LINE_WIDTH}px`}  solid ${props => props.color};
        border-right: 0;
        right: ${props => `${-props.imageSize * (props.multiplier || WIDTH_MULTIPLIER)}px`};
        left: unset;
        border-top-left-radius: ${`${LINE_WIDTH}px`};
        border-bottom-left-radius: ${`${LINE_WIDTH}px`};
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    &:hover {
        &::before {
            border-right: 0;
        }
    }
`;

const EventPoint = styled(EventMarker)`
    &::before {
        border-left: 0;
        border-bottom: 0;
        border-right: 0;
    }
    &:hover {
        &::before {
            border-left: 0;
            border-right: 0;
            border-bottom: 0;
        }
    }
`;

const EventPointLeft = styled(EventMarkerLeft)`
    &::before {
        border-left: 0;
        border-bottom: 0;
    }
    &:hover {
        &::before {
            border-left: 0;
            border-bottom: 0;
        }
    }
`;

export default function Timeline() {
    const containerRef = useRef(null);
    const [scale, setScale] = useState(INITIAL_SCALE / 10);
    const [opacity, setOpacity] = useState(0);
    const [translation, setTranslation] = useState({ x: '0px', y: '0px' });
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [collapse, setCollapse] = useState(false);
    const [overflowHidden, setOverflowHidden] = useState(true);
    const [timelineWidth, setTimelineWidth] = useState(TIMELINE_WIDTH);
    const [imageSize, setImageSize] = useState(100 / INITIAL_SCALE);


    const handleResize = () => {
        if (window.innerWidth <= 768) {
            setImageSize(60 / INITIAL_SCALE);
        } else {
            setImageSize(100 / INITIAL_SCALE);
        }
        const width = window.innerWidth < TIMELINE_WIDTH ? window.innerWidth : TIMELINE_WIDTH;
        setTimelineWidth(width);
    };

    useEffect(() => {
        handleResize();
        setScale(INITIAL_SCALE);
        setOpacity(1);
        window.addEventListener('resize', handleResize);
        return () => {
            setScale(INITIAL_SCALE / 2);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const selectEvent = (ref, eventName) => {
        const top = ref.current.getBoundingClientRect().top;
        const centerOffset = window.innerHeight / 2 - top;
        const horizontalOffset = window.innerWidth / 2 - ref.current.getBoundingClientRect().left;
        const yOffset = (centerOffset / INITIAL_SCALE) - ref.current.getBoundingClientRect().height / (2 * INITIAL_SCALE);
        const xOffset = (horizontalOffset / INITIAL_SCALE) - ref.current.getBoundingClientRect().width / (2 * INITIAL_SCALE);
        setTranslation({ x: `${xOffset}px`, y: `${yOffset}px` });
        setTimeout(() => {
            setSelectedEvent(eventName);
            setOverflowHidden(true);
        }, TRANSITION_TIME * 1000 + 300);
        setScale(1);
        setCollapse(false);
        setOverflowHidden(false);
    };

    const zoomOut = () => {
        setScale(INITIAL_SCALE);
        setTranslation({ x: 0, y: 0 });
        setSelectedEvent(null);
        setCollapse(true);
        setOverflowHidden(false);
        setTimeout(() => {
            setOverflowHidden(true);
        }, TRANSITION_TIME * 1000);
    };

    const visibleSection = () => {
        if (selectEvent == null) {
            return null;
        }
        switch (selectedEvent) {
            case TIMELINE_EVENTS.COLLEGE:
                return (<CollegeSection exit={zoomOut} imageSize={imageSize}></CollegeSection>);

            case TIMELINE_EVENTS.SANDIA:
                return (<SandiaSection exit={zoomOut} imageSize={imageSize}></SandiaSection>);

            case TIMELINE_EVENTS.LOCKHEED:
                return (<LokcheedSection exit={zoomOut} imageSize={imageSize}></LokcheedSection>);

            case TIMELINE_EVENTS.STRATOSPHERE:
                return (<StratosphereSection exit={zoomOut} imageSize={imageSize}></StratosphereSection>);

            case TIMELINE_EVENTS.ENGAGEMENT:
                return (<EngagementSection exit={zoomOut} imageSize={imageSize}></EngagementSection>);

            case TIMELINE_EVENTS.BLOWME:
                return (<BlowmeSection exit={zoomOut} imageSize={imageSize}></BlowmeSection>); 

            case TIMELINE_EVENTS.DRONE:
                return (<DroneSection exit={zoomOut} imageSize={imageSize}></DroneSection>);

            default:
                return null;
        }
    };

    return (
        <div>
            <OverflowHidden overflowHidden={overflowHidden}>
                <TimelineContainer ref={containerRef} scale={scale} translation={translation} opacity={opacity}>
                    <TimelineList>
                        <TimelineMarker>Present</TimelineMarker>
                        <TimelineMarker>2018</TimelineMarker>
                        <TimelineMarker>2017</TimelineMarker>
                        <TimelineMarker>2016</TimelineMarker>
                        <TimelineMarker>2015</TimelineMarker>
                        <TimelineMarker>2014</TimelineMarker>
                        <TimelineMarker>2011</TimelineMarker>
                    </TimelineList>
                    <EventMarker top={`calc(-100% + 13vh)`} height={26} color={Colors.stratosphere} timelineWidth={timelineWidth} imageSize={imageSize}>
                        <TimelineEvent
                            left={true}
                            eventTitle="Stratosphere Digital"
                            eventSubtitle="Independent Contractor"
                            eventId={TIMELINE_EVENTS.STRATOSPHERE}
                            collapse={collapse}
                            imageSize={imageSize}
                            image={Stratosphere}
                            color={'black'}
                            selectItem={selectEvent}
                            exit={zoomOut}
                            scale={INITIAL_SCALE}
                            transitionTime={TRANSITION_TIME}>
                        </TimelineEvent>
                    </EventMarker>
                    <EventPointLeft multiplier={WIDTH_MULTIPLIER * 0.5} top={`calc(-100% + 10vh)`} height={0} color={Colors.scavenger} timelineWidth={timelineWidth} imageSize={imageSize}>
                        <TimelineEvent
                            eventId={TIMELINE_EVENTS.ENGAGEMENT}
                            eventTitle="I Got Engaged!"
                            eventSubtitle="And Built An App"
                            collapse={collapse}
                            imageSize={imageSize}
                            image={Scavenger}
                            color={"black"}
                            selectItem={selectEvent}
                            exit={zoomOut}
                            scale={INITIAL_SCALE}
                            transitionTime={TRANSITION_TIME}>
                        </TimelineEvent>
                    </EventPointLeft>
                    <EventPoint multiplier={WIDTH_MULTIPLIER} top={`calc(-100% + 80vh)`} height={0} color={Colors.drone} timelineWidth={timelineWidth} imageSize={imageSize}>
                        <TimelineEvent
                            eventId={TIMELINE_EVENTS.DRONE}
                            eventTitle="Raspberry Pi Drone"
                            eventSubtitle="Android App"
                            collapse={collapse}
                            imageSize={imageSize}
                            image={RaspberryDrone}
                            color={Colors.drone}
                            selectItem={selectEvent}
                            exit={zoomOut}
                            scale={INITIAL_SCALE}
                            transitionTime={TRANSITION_TIME}>
                        </TimelineEvent>
                    </EventPoint>
                    {/* <EventPoint multiplier={WIDTH_MULTIPLIER * 2} top={`calc(-100% + 120vh)`} height={0} color={Colors.uofaRed} timelineWidth={timelineWidth} imageSize={imageSize}>
                        <TimelineEvent
                            eventId={TIMELINE_EVENTS.BLOWME}
                            eventTitle="I got engaged!"
                            eventSubtitle="And built an app"
                            collapse={collapse}
                            imageSize={imageSize}
                            image={Wildcat}
                            color={Colors.uofaRed}
                            selectItem={selectEvent}
                            exit={zoomOut}
                            scale={INITIAL_SCALE}
                            transitionTime={TRANSITION_TIME}>
                        </TimelineEvent>
                    </EventPoint> */}
                    <EventMarkerLeft top={`calc(-100% + 56vh)`} height={70} color={Colors.lockheed} timelineWidth={timelineWidth} imageSize={imageSize}>
                        <TimelineEvent
                            eventId={TIMELINE_EVENTS.LOCKHEED}
                            eventTitle="Lockheed Martin"
                            eventSubtitle="Software Engineer"
                            collapse={collapse}
                            imageSize={imageSize}
                            image={Lockheed}
                            color={Colors.lockheed}
                            selectItem={selectEvent}
                            exit={zoomOut}
                            scale={INITIAL_SCALE}
                            transitionTime={TRANSITION_TIME}>
                        </TimelineEvent>
                    </EventMarkerLeft>
                    <EventMarker top={'85%'} height={50} color={Colors.sandia} timelineWidth={timelineWidth} imageSize={imageSize}>
                        <TimelineEvent
                            eventId={TIMELINE_EVENTS.SANDIA}
                            eventTitle="Sandia Labs"
                            eventSubtitle="Technical Intern"
                            collapse={collapse}
                            imageSize={imageSize}
                            image={Sandia}
                            color={Colors.sandia}
                            selectItem={selectEvent}
                            exit={zoomOut}
                            scale={INITIAL_SCALE}
                            transitionTime={TRANSITION_TIME}>
                        </TimelineEvent>
                    </EventMarker>
                    <EventMarkerLeft top={'calc(24vh + 100%)'} height={89} color={Colors.uofaRed} timelineWidth={timelineWidth} imageSize={imageSize}>
                        <TimelineEvent
                            left={true}
                            eventTitle="University of Arizona"
                            eventSubtitle="Master of Science"
                            eventId={TIMELINE_EVENTS.COLLEGE}
                            collapse={collapse}
                            imageSize={imageSize}
                            image={Wildcat}
                            color={Colors.uofaRed}
                            selectItem={selectEvent}
                            exit={zoomOut}
                            scale={INITIAL_SCALE}
                            transitionTime={TRANSITION_TIME}>
                        </TimelineEvent>
                    </EventMarkerLeft>
                </TimelineContainer>
            </OverflowHidden>
            {visibleSection()}
        </div>
    );
}
