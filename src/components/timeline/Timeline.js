import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components/macro';
import { mix } from 'polished';

import Lockheed from 'images/lockheed.svg';
import UofA from 'images/uofa.svg';
import Sandia from 'images/sandia.svg';
import Stratosphere from 'images/stratosphere.svg';
import Scavenger from 'images/scavenger.svg';
import RaspberryDrone from 'images/raspberry_drone.svg';
import Daylytes from 'images/daylytes.svg';
import Daylights from 'images/daylights.svg';
import Colors from 'styles/Colors';

import TimelineEvent from 'components/timeline/TimelineEvent';
import InfoRoutes from 'components/info-sections/InfoRoutes';
import Routes from 'Routes';

const TRANSITION_TIME = 500;
const INITIAL_SCALE = 0.25;
const TIMELINE_WIDTH = 100 / INITIAL_SCALE;
const LINE_WIDTH = 6 / INITIAL_SCALE;
const WIDTH_MULTIPLIER = 2.0;
const TIMEILINE_PADDING = 48 / INITIAL_SCALE;

const OverflowHidden = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
`;

const TimelineContainer = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  height: 100vh;
  /* transform-origin: 0; */
  opacity: ${(props) => props.opacity};
  transform: translate3d(
      ${(props) => (props.translation ? props.translation.x : 0)},
      ${(props) => (props.translation ? props.translation.y : 0)},
      0
    )
    scale3d(
      ${(props) =>
        `${props.scale || 1}, ${props.scale || 1}, ${props.scale || 1}`}
    );
  transition: all ${`${TRANSITION_TIME}ms ease-in-out`};
  backface-visibility: hidden;
`;

const TimelineList = styled.ul`
  position: relative;
  top: ${`${-100 / (2 * INITIAL_SCALE) + 40}vh`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  padding: ${`${TIMEILINE_PADDING}px`} 0;
  box-sizing: border-box;
  margin: 0;
  height: ${`${100 / INITIAL_SCALE}%`};
  &::before {
    content: '';
    position: absolute;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.1) 25%);
    opacity: 0.5;
    top: 0;
    width: ${`${LINE_WIDTH}px`};
    height: ${`${100 / INITIAL_SCALE}%`};
  }
`;

const TimelineMarker = styled.li`
  color: white;
  background-color: ${Colors.timelineBackground};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  z-index: 1;
  font-weight: 600;
  font-size: ${`${20 / INITIAL_SCALE}px`};
  padding: ${`${6 / INITIAL_SCALE}px ${10 / INITIAL_SCALE}px`};
  border-radius: ${`${40 / INITIAL_SCALE}px`};
  @media (max-width: 768px), (max-height: 850px) {
    font-size: ${`${16 / INITIAL_SCALE}px`};
  }
`;

const EventMarker = styled.div`
  position: absolute;
  /* top: ${(props) =>
    `calc(${props.top - props.height / 2}% - ${props.imageSize / 2}px)`}; */
  top: ${(props) => `${props.top - props.height / 2 - 22}%`};
  left: ${(props) =>
    `calc(${
      props.imageSize * (props.multiplier || WIDTH_MULTIPLIER) + LINE_WIDTH / 2
    }px + 50vw)`};
  &::before {
    content: '';
    position: absolute;
    border-top: ${`${LINE_WIDTH}px`} solid ${(props) => mix(0.75, props.color, Colors.primary)};
    border-bottom: ${`${LINE_WIDTH}px`} solid ${(props) => mix(0.75, props.color, Colors.primary)};
    border-right: ${`${LINE_WIDTH}px`} solid ${(props) => mix(0.75, props.color, Colors.primary)};
    padding: ${(props) => 
      `${props.height}vh ${props.imageSize * (props.multiplier / 2 || WIDTH_MULTIPLIER / 2) - LINE_WIDTH / 4}px`};
    left: ${(props) =>
      `${-props.imageSize * (props.multiplier || WIDTH_MULTIPLIER)}px`};
    top: ${(props) =>
      `calc(${-props.height}vh - ${(INITIAL_SCALE * props.imageSize) / 4}px)`};
    transition: all 0.3s ease-in-out;
    border-top-right-radius: ${`${LINE_WIDTH}px`};
    border-bottom-right-radius: ${`${LINE_WIDTH}px`};
  }
  &:hover {
    &::before {
      background-color: ${(props) => `${props.color}40`};
      transition: all 0.3s ease-in-out;
    }
  }
`;

const EventMarkerLeft = styled(EventMarker)`
  right: ${(props) =>
    `calc(${
      props.imageSize * (props.multiplier || WIDTH_MULTIPLIER) + LINE_WIDTH / 2
    }px + 50vw)`};
  left: unset;
  &::before {
    border-left: ${`${LINE_WIDTH}px`} solid ${(props) => mix(0.75, props.color, Colors.primary)};
    border-right: 0;
    right: ${(props) =>
      `${-props.imageSize * (props.multiplier || WIDTH_MULTIPLIER)}px`};
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

const timelineMarkers = () => {
  const markers = ['Present', '2020', '2019', '2018', '2016', '2014', '2011'];
  return markers.map((marker) => (
    <TimelineMarker key={marker}>{marker}</TimelineMarker>
  ));
};

export default function Timeline(props) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(INITIAL_SCALE / 3);
  const [opacity, setOpacity] = useState(0);
  const [translation, setTranslation] = useState({ x: '0px', y: '0px' });
  const [collapse, setCollapse] = useState(false);
  const [timelineWidth, setTimelineWidth] = useState(TIMELINE_WIDTH);
  const [imageSize, setImageSize] = useState(100 / INITIAL_SCALE);
  const [showRoute, setShowRoute] = useState(false);

  const handleResize = useCallback(() => {
    if (window.innerWidth <= 768 || window.innerHeight <= 850) {
      setImageSize(60 / INITIAL_SCALE);
    } else {
      setImageSize(100 / INITIAL_SCALE);
    }
    const width =
      window.innerWidth < TIMELINE_WIDTH ? window.innerWidth : TIMELINE_WIDTH;
    setTimelineWidth(width);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (
      props.location.pathname.replace(/\//g, '') ===
      Routes.timeline.replace(/\//g, '')
    ) {
      setTimeout(() => {
        setScale(INITIAL_SCALE);
        setTranslation({ x: 0, y: 0 });
        setOpacity(1);
        setCollapse(true);
      });
    } else if (opacity !== 1) {
      setTimeout(() => {
        setScale(INITIAL_SCALE);
        setTranslation({ x: 0, y: 0 });
        setOpacity(1);
        setCollapse(true);
      });
    }
  }, [props.location.pathname]);

  const selectEvent = useCallback((ref, eventName) => {
    const windowHeight = document.documentElement.offsetHeight;
    const element = ref.current.getBoundingClientRect();
    const elementHeight = window.innerWidth <= 768 || window.innerHeight <= 850 ? 120 : 200;
    // TODO: Figure out why these are not always the same
    const heightDiff = elementHeight - element.height;
    // const centerOffset = window.innerHeight / 2 - top;
    // Using offset height of the document instead of window.innerHeight ignores the address bar on mobile
    const verticalOffset =
      windowHeight / 2 - document.documentElement.scrollTop - element.top;

    const horizontalOffset = window.innerWidth / 2 - element.left;

    const yOffset =
      verticalOffset / INITIAL_SCALE -
      elementHeight / (2 * INITIAL_SCALE) +
      2 * heightDiff; // Not sure why adding this is necessary, maybe some sort of timing/race condition?

    const xOffset =
      horizontalOffset / INITIAL_SCALE - element.width / (2 * INITIAL_SCALE);

    const finalYOffset = yOffset - windowHeight / 2 + elementHeight;

    // Move to center
    setTranslation({ x: `${xOffset}px`, y: `${yOffset}px` });

    setTimeout(() => {
      // Move to top
      setTranslation({ x: `${xOffset}px`, y: `${finalYOffset}px` });
      setTimeout(() => {
        setShowRoute(true);
        props.history.push(eventName);
      }, TRANSITION_TIME);
    }, TRANSITION_TIME + 300);

    setScale(1);
    setCollapse(false);
  }, []);

  const zoomOut = useCallback(() => {
    setScale(INITIAL_SCALE);
    setTranslation({ x: 0, y: 0 });
    setCollapse(true);
    props.history.push(Routes.timeline);
  }, [INITIAL_SCALE, Routes.timeline]);

  // [-88, 350] => 438
  return (
    <div>
      <OverflowHidden>
        <TimelineContainer
          ref={containerRef}
          scale={scale}
          translation={translation}
          opacity={opacity}
        >
          <TimelineList>{timelineMarkers()}</TimelineList>
          <EventMarkerLeft
            top={-77}
            height={22}
            color={Colors.daylightsPrimary}
            timelineWidth={timelineWidth}
            imageSize={imageSize}
          >
            <TimelineEvent
              left={true}
              eventTitle='Daylights, Inc'
              eventSubtitle='Software Engineer'
              route={Routes.daylights}
              collapse={collapse}
              imageSize={imageSize}
              image={Daylights}
              color={Colors.daylightsDark}
              selectItem={selectEvent}
              exit={zoomOut}
              scale={INITIAL_SCALE}
              transitionTime={TRANSITION_TIME}
            />
          </EventMarkerLeft>
          <EventMarker
            top={-22}
            height={28}
            color={Colors.daylytes}
            timelineWidth={timelineWidth}
            imageSize={imageSize}
          >
            <TimelineEvent
              left={true}
              eventTitle='Daylytes, Inc'
              eventSubtitle='Software Engineer'
              route={Routes.daylytes}
              collapse={collapse}
              imageSize={imageSize}
              image={Daylytes}
              color={Colors.daylytes}
              selectItem={selectEvent}
              exit={zoomOut}
              scale={INITIAL_SCALE}
              transitionTime={TRANSITION_TIME}
            />
          </EventMarker>
          <EventMarker
            multiplier={WIDTH_MULTIPLIER * 0.75}
            top={40}
            height={20}
            color={Colors.stratosphere}
            timelineWidth={timelineWidth}
            imageSize={imageSize}
          >
            <TimelineEvent
              left={true}
              eventTitle='Stratosphere Digital'
              eventSubtitle='Contractor'
              route={Routes.stratosphere}
              collapse={collapse}
              imageSize={imageSize}
              image={Stratosphere}
              color='black'
              selectItem={selectEvent}
              exit={zoomOut}
              scale={INITIAL_SCALE}
              transitionTime={TRANSITION_TIME}
            />
          </EventMarker>
          <EventPointLeft
            multiplier={WIDTH_MULTIPLIER * 0.5}
            top={25}
            height={0}
            color={Colors.scavenger}
            timelineWidth={timelineWidth}
            imageSize={imageSize}
          >
            <TimelineEvent
              route={Routes.engagement}
              eventTitle='I Got Engaged!'
              eventSubtitle='And Built An App'
              collapse={collapse}
              imageSize={imageSize}
              image={Scavenger}
              color={'black'}
              selectItem={selectEvent}
              exit={zoomOut}
              scale={INITIAL_SCALE}
              transitionTime={TRANSITION_TIME}
            />
          </EventPointLeft>
          <EventPoint
            multiplier={WIDTH_MULTIPLIER * 0.5}
            top={80}
            height={0}
            color={Colors.drone}
            timelineWidth={timelineWidth}
            imageSize={imageSize}
          >
            <TimelineEvent
              route={Routes.drone}
              eventTitle='Raspberry Pi Drone'
              eventSubtitle='Android App'
              collapse={collapse}
              imageSize={imageSize}
              image={RaspberryDrone}
              color={Colors.drone}
              selectItem={selectEvent}
              exit={zoomOut}
              scale={INITIAL_SCALE}
              transitionTime={TRANSITION_TIME}
            />
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
          <EventMarkerLeft
            top={76}
            height={55}
            color={Colors.lockheed}
            timelineWidth={timelineWidth}
            imageSize={imageSize}
          >
            <TimelineEvent
              route={Routes.lockheed}
              eventTitle='Lockheed Martin'
              eventSubtitle='Software Engineer'
              collapse={collapse}
              imageSize={imageSize}
              image={Lockheed}
              color={Colors.lockheed}
              selectItem={selectEvent}
              exit={zoomOut}
              scale={INITIAL_SCALE}
              transitionTime={TRANSITION_TIME}
            />
          </EventMarkerLeft>
          <EventMarker
            top={149}
            height={27}
            color={Colors.sandia}
            timelineWidth={timelineWidth}
            imageSize={imageSize}
          >
            <TimelineEvent
              route={Routes.sandia}
              eventTitle='Sandia Labs'
              eventSubtitle='Technical Intern'
              collapse={collapse}
              imageSize={imageSize}
              image={Sandia}
              color={Colors.sandia}
              selectItem={selectEvent}
              exit={zoomOut}
              scale={INITIAL_SCALE}
              transitionTime={TRANSITION_TIME}
            />
          </EventMarker>
          <EventMarkerLeft
            top={191}
            height={55}
            color={Colors.uofaRed}
            timelineWidth={timelineWidth}
            imageSize={imageSize}
          >
            <TimelineEvent
              left={true}
              eventTitle='University of Arizona'
              eventSubtitle='Master of Science'
              route={Routes.college}
              collapse={collapse}
              imageSize={imageSize}
              image={UofA}
              color={Colors.uofaRed}
              selectItem={selectEvent}
              exit={zoomOut}
              scale={INITIAL_SCALE}
              transitionTime={TRANSITION_TIME}
            />
          </EventMarkerLeft>
        </TimelineContainer>
      </OverflowHidden>
      <InfoRoutes show={showRoute} zoomOut={zoomOut} imageSize={imageSize} />
    </div>
  );
}
