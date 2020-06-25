import React, { Fragment } from 'react';

//Roouting
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Layout


//Componentes
import Home from './components/Home/home.js';

function App() {
  return (
    <Router>
      <Fragment>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
      </Fragment>
    </Router>
  );
}

export default App;
