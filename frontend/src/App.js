import React from 'react';
import './App.css';
import Main from './components/Main';
import Cover from './components/Cover';
import Yuigonshya from './components/Yuigonshya';
import Sozokunin from './components/Sozokunin';
import Zaisan from './components/Zaisan/CreditProp';
import Explain from './components/WalkThrough/Explain';
import Rules from './components/WalkThrough/Rules';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Cover}></Route>
        <Route path="/explain" component={Explain}></Route>
        <Route path="/rules" component={Rules}></Route>
        <Route path="/main" component={Main}></Route>
        <Route path="/yuigonshya" component={Yuigonshya}></Route>
        <Route path="/sozokunin" component={Sozokunin}></Route>
        <Route path="/zaisan" component={Zaisan}></Route>
      </Router>
    </div>
  );
}

export default App;
