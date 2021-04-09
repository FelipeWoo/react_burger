import React, { Component } from 'react';
import './App.css';
//Agregar componentes nuevos
import Person from './Person/Person';


//La magia sucede aqui en el render

//El código de HTML abajo es llamada JSX
// JSX toma el código de los componentes y transforma en HTML
//Lo ideal es invocar los componentes aquí y programarlos en su propio archivo
class App extends Component {
  //state es información interna
  state = {
    //lista de personas
    persons: [
      {name:'Maxi', age:28},
      {name:'Manu', age:29},
      {name:'Pedro', age:26}
  ],
  otherState: 'something'
  }
  //Arrow functon para lo que se va a hacer con el evento del botón
  switchNameHandler = () => {
    //console.log('El botón funciona');
    // WRONG this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        {name:'Maximilian', age:28},
        {name:'Manu', age:29},
        {name:'Pedro', age:27}
    ]
    })
  }


  render() {
    return (
      //Agregar los componentes de la aplicación
      <div className="App">
        <h1>Hola, esta es la nueva App</h1>
        <p>Esto esta funcionando</p>
        <button onClick= {this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobies: Me gusta nadar los sabados por las mañanas</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

      </div>
    );


//Esta es la forma larga de ejecución
//return React.createElement('div',null, 'Hola esto es texto')

  }
}

export default App;
