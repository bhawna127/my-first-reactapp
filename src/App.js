import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      {name: "Max", age:27},
      {name: "Phil", age:27}
    ],
    username: 'Supermax'
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
       {name: event.target.value, age:24},
       {name: "John", age:17}
      ]
   })
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    
    return (
      <div className="App">
        <h1>Hi I am here</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.switchNameHandler.bind(this, "Max!")}>Click me</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} 
        changed={this.nameChangedHandler} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, "Max22!")}>My Hobbies: Dancing and Reading</Person>
        <UserInput 
        inchanged= {this.usernameChangedHandler}
        currentName = {this.state.username} 
        />
        <UserOutput username={this.state.username}/>
      </div>

    );
  }
}

export default App;
