import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id:'111', name: "Max", age:27},
      {id:'112', name: "Phil", age:27},
      {id:'113', name: "Joy", age:27}
    ],
    username: 'Supermax',
    showPersons: false
  }

  switchNameHandler = (newName)=>{
   console.log("Clicked me!");
   this.setState({
      persons: [
       {name: newName, age:24},
       {name: "John", age:17}
      ]
   })

  }

  deletPersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;
  
    this.setState({ persons: persons });
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value})
  }

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow });
  }

  render() {
    let persons = null;
    if(this.state.showPersons){
      persons= <Persons 
           persons={this.state.persons}
           clicked={this.deletPersonHandler}
           changed={this.nameChangedHandler}
          />
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} 
          changed={this.nameChangedHandler} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, "Max22!")}>My Hobbies: Dancing and Reading</Person> */}
      
      
    
    }

    

    return (
      <div className={classes.App}>
        <Cockpit 
        showPersons={this.state.showPersons} 
        persons={this.state.persons}
        clicked = {this.togglePersonsHandler} 
        />
        {persons}
        {/* <UserInput 
        inchanged= {this.usernameChangedHandler}
        currentName = {this.state.username} 
        />
        <UserOutput username={this.state.username}/> */}
      </div>
    );
  }
}

export default App;
