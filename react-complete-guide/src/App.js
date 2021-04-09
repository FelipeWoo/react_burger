import React, { Component } from 'react';
import './App.css';
//Agregar componentes nuevos
import Person from './Person/Person';


//La magia sucede aqui en el render

//El código de HTML abajo es llamada JSX
// JSX toma el código de los componentes y transforma en HTML
//Lo ideal es invocar los componentes aquí y programarlos en su propio archivo
class App extends Component {
  render() {
    return (
      //Agregar los componentes de la aplicación
      <div className="App">
        <h1>Hola, esta es la nueva App</h1>
        <p>Esto esta funcionando</p>
        <Person />
      </div>
    );


//Esta es la forma larga de ejecución
//return React.createElement('div',null, 'Hola esto es texto')

  }
}

export default App;
