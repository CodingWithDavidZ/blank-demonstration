import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';

import Blank from './components/Blank';
import Header from './components/Header';
import PhishingDemo from './components/PhishingDemo';
import SaferBlank from './components/SaferBlank';
import BadBlank from './components/BadBlank';
import Home from './components/Home';
import RedirectComponent from './components/RedirectComponent';

function App() {
  const [changePage, setChangePage] = useState(true);

  return (
    <Router>
      <Route exact path='/'>
        <Redirect to='/home' />
      </Route>

      <Header />

      <Route exact path={'/home'}>
        <Home />
      </Route>

      <Route exact path={'/phishingdemo'}>
        <PhishingDemo />
      </Route>

      <Route exact path={'/blank'}>
        <Blank />
      </Route>

      <Route exact path={'/saferblank'}>
        <SaferBlank />
      </Route>

      <Route exact path={'/badblank'}>
        {changePage ? (
          <BadBlank setChangePage={setChangePage} changePage={changePage} />
        ) : (
          <RedirectComponent />
        )}
      </Route>
    </Router>
  );
}

export default App;
