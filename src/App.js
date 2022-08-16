import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Section from './components/Section'
import {DataProvider} from './components/Context'
import Footer from './components/Footer';


class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Navbar />
            <Section />
          </Router>
        </div>
        <Footer/>
      </DataProvider>
    );
  }
}

export default App;