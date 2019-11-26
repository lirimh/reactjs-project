import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Components/HomeComponent/Home';
import About from './Components/AboutComponent/About';
import Contact from './Components/ContactComponent/Contact';
import Footer from './Components/FooterComponent/Footer';
import Team from './Components/TeamComponent/Team';
import Pagination from './Pagination';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import Logo from './img/logo.png'

import './App.css';

function App() {
  return (
    <div>
    <Router>
      <div>
      <>
        <Navbar bg="dark" variant="dark" expand="lg">
          <img className="logo ml-5 animated rotateIn" src={Logo} alt=""></img>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <ul className="navbar-nav mr-auto">
                    <li><Link to={'/'} className="nav-link">Home</Link></li>
                    <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                    <li><Link to={'/about'} className="nav-link">About</Link></li>
                    <li><Link to={'/team'} className="nav-link">Team</Link></li>
                </ul>
          </Nav>
          <Form className="mr-5" inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2 " />
            <Button variant="outline-info">Search</Button>
          </Form>
          </Navbar.Collapse>
        </Navbar>
      </>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <Route excat path='/about' component={About} />
          <Route excat path='/team' component={Team} />
        </Switch>
      </div>
    </Router>
    <Pagination />
    <Footer />
    </div>
      );
}

export default App;
