import React from "react";
import { Switch, Route } from "react-router-dom";

import LockheedSection from "components/info-sections/LockheedSection";
import SandiaSection from "components/info-sections/SandiaSection";
import CollegeSection from "components/info-sections/CollegeSection";
import StratosphereSection from "components/info-sections/StratosphereSection";
import EngagementSection from "components/info-sections/EngagementSection";
import BlowmeSection from "components/info-sections/BlowmeSection";
import DroneSection from "components/info-sections/DroneSection";
import DaylytesSection from "components/info-sections/DaylytesSection";
import Routes from "Routes";
import DaylightsSection from "./DaylightsSection";

export default function InfoRoutes(props) {
  return (
    <Switch>
      <Route
        path={Routes.college}
        render={() => <CollegeSection {...props} />}
      />
      <Route path={Routes.sandia} render={() => <SandiaSection {...props} />} />
      <Route
        path={Routes.lockheed}
        render={() => <LockheedSection {...props} />}
      />
      <Route
        path={Routes.stratosphere}
        render={() => <StratosphereSection {...props} />}
      />
      <Route
        path={Routes.engagement}
        render={() => <EngagementSection {...props} />}
      />
      <Route path={Routes.blowme} render={() => <BlowmeSection {...props} />} />
      <Route path={Routes.drone} render={() => <DroneSection {...props} />} />
      <Route
        path={Routes.daylytes}
        render={() => <DaylytesSection {...props} />}
      />
      <Route
        path={Routes.daylights}
        component={() => <DaylightsSection {...props} />}
      />
    </Switch>
  );
}
