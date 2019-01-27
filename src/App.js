import React, { Component } from 'react';
import FormHolder from './component/questionholder/formholder';
import logo from './logo.svg';
import './App.css';

import Background from './graphics/background-img.jpg';

var backgroundImage = {
    width: "100%",
    backgroundImage: `url(${Background})`
};

class App extends Component {
  render() {
    return (
      <div className="App" style={ backgroundImage }>
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<p>*/}
            {/*Edit <code>src/App.js</code> and save to reload.*/}
          {/*</p>*/}

          {/*<a*/}
            {/*className="App-link"*/}
            {/*href="https://reactjs.org"*/}
            {/*target="_blank"*/}
            {/*rel="noopener noreferrer"*/}
          {/*>*/}
            {/*Learn React*/}
          {/*</a>*/}
        </header>

          <div className="form-padding">
            <FormHolder/>
          </div>

      </div>
    );
  }
}

export default App;
