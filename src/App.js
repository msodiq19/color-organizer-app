import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AddColor from './components/AddColor';
import DisplayColor from './components/DisplayColor';
import Header from './components/Header';
import About from './components/pages/About';
import './App.css'

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [],
    };
  }

  getColor = (e,color,reffs) => {
    e.preventDefault();
    this.setState({colors : [...this.state.colors,color]})
    const { _title, _hex } = reffs;
    _title.value = "";
    _hex.value = "#000000";

  };

  deleteColor = (index) =>{
    this.setState({colors: this.state.colors.filter((color, i) =>index !== i)})
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" render={props=>(
            <React.Fragment>
              <AddColor getColor={this.getColor} />
              <DisplayColor
              {...this.state}
              className="container"
              del={this.deleteColor}
              />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>    
      </Router>
    );
  }
}

export default App;
