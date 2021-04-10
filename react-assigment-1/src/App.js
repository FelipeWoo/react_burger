
//Important to change Component to useState
import React, { useState } from 'react';
//Components
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

import './App.css';

const App = props => {

  //Dynamic use of username
  const [userNameState, setUserName] = useState({
    usernames:[{username:'max69'}]
  });

  //Click event handler of username
  const switchUserHandler = () => {
    setUserName({
      usernames: [{username:'max699'}]  
    });
  }
  //Input event 
  const userChangeHandler = (event) => {
    setUserName({
      usernames: [{username:event.target.value}]
    });
  }

  //Render
    return (
      <div className="App">
        <h1>First Assigment</h1>
        
        <UserOutput username={userNameState.usernames[0].username}
        click={switchUserHandler}/>
        <UserInput changed={userChangeHandler}/>
      </div>
    );
  }

export default App;
