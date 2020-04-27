import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './../components/header';
import Footer from './../components/footer';
import Home from './../components/Home';
import Contact from './../components/Contact';
import Careers from './../components/Careers';
import ContactDetails from '../components/ContactDetails';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/contact/:id" component={ContactDetails} />
        <Route path="/careers" component={Careers} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
