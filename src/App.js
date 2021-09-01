import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Blank from './Blank';
import Header from './Header';
import PhishingDemo from './PhishingDemo';
import SaferBlank from './SaferBlank';
import BadBlank from './BadBlank';
import Home from './Home';

function App() {
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
        <BadBlank />
      </Route>
    </Router>
  );
}

export default App;
