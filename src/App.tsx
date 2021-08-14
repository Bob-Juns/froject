import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// routes
import Home from '@routes/Home';
import Projects from '@routes/Projects';
import Detail from '@routes/Detail';
import Faq from '@routes/Faq';

import GA4React from 'ga-4-react';

const trackingId = process.env.GA_TRACKING_ID;

const App = () => {
  useEffect(() => {
    trackingId && new GA4React(trackingId).initialize();
  }, [trackingId]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/faq" component={Faq} />
      </Switch>
      <Route path="/project/:projectId" component={Detail} />
    </Router>
  );
};

export default App;
