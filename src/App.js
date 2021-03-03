import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    let btnClass = "";
    if(this.state.showPersons){
      persons= (
        <div>
          { this.state.persons.map((person, index)=>{
            return <ErrorBoundary key={person.id}><Person 
                    click = {()=> this.deletPersonHandler(index)}
                    name={person.name} 
                    age={person.age} 
                    changed={(event)=> this.nameChangedHandler(event,person.id)}/></ErrorBoundary>
          })}
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} 
          changed={this.nameChangedHandler} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, "Max22!")}>My Hobbies: Dancing and Reading</Person> */}
      </div>
      );
      
      btnClass = classes.Red;
    }

    let assingedClasses = [];
    if(this.state.persons.length <= 2){
      assingedClasses.push(classes.red);
    }

    if(this.state.persons.length <= 1){
      assingedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi I am here</h1>
        <p className={assingedClasses.join(' ')}>This is really working</p>
        {/* <button style={style} onClick={this.switchNameHandler.bind(this, "Max!")}>Click me</button> */}
        <button className={btnClass} onClick={ this.togglePersonsHandler }>Toggle Persons</button>
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
