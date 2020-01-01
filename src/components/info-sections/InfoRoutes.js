import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LokcheedSection from 'components/info-sections/LokcheedSection';
import SandiaSection from 'components/info-sections/SandiaSection';
import CollegeSection from 'components/info-sections/CollegeSection';
import StratosphereSection from 'components/info-sections/StratosphereSection';
import EngagementSection from 'components/info-sections/EngagementSection';
import BlowmeSection from 'components/info-sections/BlowmeSection';
import DroneSection from 'components/info-sections/DroneSection';
import DaylytesSection from 'components/info-sections/DaylytesSection';
import Routes from 'Routes';

export default function InfoRoutes(props) {
    return (
        <Switch>
            <Route path={Routes.college} render={() => <CollegeSection {...props}></CollegeSection>}/>
            <Route path={Routes.sandia} render={() => <SandiaSection {...props}></SandiaSection>}/>
            <Route path={Routes.lockheed} render={() => <LokcheedSection {...props}></LokcheedSection>}/>
            <Route path={Routes.stratosphere} render={() => <StratosphereSection {...props}></StratosphereSection>}/>
            <Route path={Routes.engagement} render={() => <EngagementSection {...props}></EngagementSection>}/>
            <Route path={Routes.blowme} render={() => <BlowmeSection {...props}></BlowmeSection>}/>
            <Route path={Routes.drone} render={() => <DroneSection {...props}></DroneSection>}/>
            <Route path={Routes.daylytes} render={() => <DaylytesSection {...props}></DaylytesSection>}/>
        </Switch>
    );
}
