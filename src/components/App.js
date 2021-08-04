import './App.css';

import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';

import LangdingPage from './views/landingPage/LangdingPage';
import Login from './views/login/Login';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <div>
        <Switch>
          <Route exact path="/" component={LangdingPage}/>
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
