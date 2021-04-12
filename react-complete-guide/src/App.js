    // //import React, { Component } from 'react';
    // import React, { useState } from 'react';
    // import './App.css';
    // //Agregar componentes nuevos
    // import Person from './Person/Person';


    // //La magia sucede aqui en el render

    // //El código de HTML abajo es llamada JSX
    // // JSX toma el código de los componentes y transforma en HTML
    // //Lo ideal es invocar los componentes aquí y programarlos en su propio archivo

    // //Código con clases
    // /*
    // class App extends Component {
    //   //state es información interna
    //   state = {
    //     //lista de personas
    //     persons: [
    //       {name:'Maxi', age:28},
    //       {name:'Manu', age:29},
    //       {name:'Pedro', age:26}
    //   ],
    //   otherState: 'something'
    //   }
    //   //Arrow functon para lo que se va a hacer con el evento del botón
    //   switchNameHandler = () => {
    //     //console.log('El botón funciona');
    //     // WRONG this.state.persons[0].name = 'Maximilian';
    //     this.setState({
    //       persons: [
    //         {name:'Maximilian', age:28},
    //         {name:'Manu', age:29},
    //         {name:'Pedro', age:27}
    //     ]
    //     })
    //   }


    //   render() {
    //     return (
    //       //Agregar los componentes de la aplicación
    //       <div className="App">
    //         <h1>Hola, esta es la nueva App</h1>
    //         <p>Esto esta funcionando</p>
    //         <button onClick= {this.switchNameHandler}>Switch Name</button>
    //         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
    //         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobies: Me gusta nadar los sabados por las mañanas</Person>
    //         <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

    //       </div>
    //     );


    // //Esta es la forma larga de ejecución
    // //return React.createElement('div',null, 'Hola esto es texto')

    //   }
    // }

    // */

    // //Código con funciones
    // const App = props => {

    //   const [personsState, setPersonsState] = useState({
    //     persons: [
    //       {id: '011', name:'Max', age:28},
    //       {id: '012', name:'Manu', age:29},
    //       {id: '013', name:'Pedro', age:26}
    //   ],
    //   showPersons: false  
    // });

    // //const [otherState, setOtherState] = useState('something');

    // //console.log(personsState, otherState);
    // /*
    // const switchNameHandler = (newName) => {
    //   //console.log('El botón funciona');
    //   // WRONG this.state.persons[0].name = 'Maximilian';
    //   setPersonsState({
    //     persons: [
    //       {name:newName, age:28},
    //       {name:'Manu', age:29},
    //       {name:'Pedro', age:27}
    //   ]
    //   })
    // }
    // */
    // const nameChangeHandler = (event, id) => {

    //   const personIndex = personsState.findIndex(p => {
    //     return p.id === id;
    //   });

    //   const person ={
    //     ...personsState[personIndex]
    //   }

    //   person.name = event.target.value;
    //   const persons = [...personsState.persons];
    //   persons[personIndex] = person;

    //   setPersonsState({
    //     persons: persons
    //   })
    // }


    // const deletePersonHandler = (personIndex) => {
    //   //Copiar el array the nombres y edades
    //   //const persons = [...personsState];
    //   const persons = personsState.persons.slice();
    //   //splice añade modifica o elimina elementos
    //   //splice(<index>,[0,1],<option>); 0->inserts, 1->replace
    //   //splice(0,0,'hola') inserts 'hola' at index 0
    //   //splice(0,1,'holas') replace 'holas' at index 0
    //   //splice(0,1) remove at index 0
    //   persons.splice(personIndex,1);
    //   setPersonsState({persons: persons})
    // }
    // const togglePersonsHandler = () =>{
    //   const doesShow = personsState.showPersons;
    //   setPersonsState({
    //     persons: personsState.persons,
    //     showPersons: !doesShow});
    // }
    
    // let persons =null;
    // if (personsState.showPersons) {
    //   persons = (
    //     <div>

    //       {personsState.persons.map((person,index) =>{
    //         return <Person 
    //         click={() => deletePersonHandler(index) }
    //         name={person.name}
    //         age={person.age} 
    //         key={person.id}
    //         changed={(event) => nameChangeHandler(event, person.id)} />
    //       })}
                
    //     </div> 
    //   );

    // }   
        
    //     const style ={
    //       backgroundColor: 'white',
    //       font: 'inherit',
    //       border: '1px solid blue',
    //       padding: '8px',
    //       cursor: 'pointer'
          
    //     };
    //     return (
    //       //Agregar los componentes de la aplicación
    //       <div className="App">
    //         <h1>Hola, esta es la nueva App</h1>
    //         <p>Esto esta funcionando</p>
    //         <button 
    //         style={style}
    //         onClick= {togglePersonsHandler}>Switch Name</button>
            
    //         {persons}
            

    //       </div>
    //     );


    // //Esta es la forma larga de ejecución
    // //return React.createElement('div',null, 'Hola esto es texto')

      
    // }

    // export default App;
    // */

import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
      persons:[
        {id:'001', name:'Max', age:22},
        {id:'002', name:'Pan', age:23},
        {id:'003', name:'Manu', age:21},
      ],
      showPersons:false

    }
    
    nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => p.id === id);

      const person = {
        ...this.state.persons[personIndex]
      }

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({persons: persons});
    };

    deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
    };

    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    };

    //--------------------------------------------------------------------------

    render(){
      const style ={
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };
      let persons = null;

      if (this.state.showPersons){
        persons = (
          <div>
            {
              this.state.persons.map((person, index) => {
                return <Person 
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event,person.id)}
                />
              })
            }

          </div>
        );
      }

      return(
        <div className='App'>
          <h1>Hi, I'm a React App</h1>
          <p>This is really working!</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}
          >Toggle Persons</button>
          {persons}
        </div>
      );

    }

}

export default App;