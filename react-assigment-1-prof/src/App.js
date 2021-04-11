import React, { Component } from 'react';

import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {


  state = {
    username:'superMax'
  }

  //Method with properties this(refers to the class), event listener
  inputChangedHandler = (event) => {
    //Add a method that manipulates the state
    //Checked the props state in the components, in this case only in UserOutput
    this.setState({username: event.target.value}); //setState is part of Component
  }

  //Method
  //We need to bind the state -> username to the input
  render() {
    return (
      <div className="App">

        <h1>Assigment One</h1>
        
        <UserInput 
        changed={this.inputChangedHandler}
        currentName={this.state.username} />
        <UserOutput userName={this.state.username}/>
        <UserOutput userName='max2'/>
        <UserOutput userName='max3'/>

      </div>
    );
  }
}

export default App;
