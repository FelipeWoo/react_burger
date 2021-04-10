import React, { Component } from 'react';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

import './App.css';

const App = props => {
/*
  const [paragraphsState, setParagraphState] = useState({
    paragraphs: [
      {content:'El contenido del párrafo 1.'},
      {content:'El contenido del párrafo 2.'},
      
    ]

  });

  const switchContentHandler = (newContent) => {
    //console.log('El botón funciona');
    // WRONG this.state.persons[0].name = 'Maximilian';
    setParagraphState({
      paragraphs: [
        {content:'El nuevo contenido del párrafo 1.'},
        {content:'El nuevo contenido del párrafo 2.'},
        
      ]
  
    });
  }
  
*/
  //Render

    return (
      <div className="App">
        <h1>First Assigment</h1>
        <UserInput />
        <UserOutput />
      </div>
    );
  }





export default App;
