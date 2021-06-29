import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// routes
import Home from '@routes/Home';
import Projects from '@routes/Projects';
import Detail from '@routes/Detail';
import Faq from '@routes/Faq';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/faq" component={Faq} />
      </Switch>
      <Route path="/project/:id" component={Detail} />
    </Router>
  );
};

export default App;
