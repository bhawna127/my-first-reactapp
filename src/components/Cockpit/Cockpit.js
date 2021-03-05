import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    let assingedClasses = [];
    let btnClass = '';
    
    if(props.showPersons){
      btnClass = classes.Red;
    }
   
    if(props.persons.length <= 2){
      assingedClasses.push(classes.red);
    }

    if(props.persons.length <= 1){
      assingedClasses.push(classes.bold);
    }
   return (
    <div className={classes.Cockpit}>  
      <h1>Hi I am here</h1>
      <p className={assingedClasses.join(' ')}>This is really working</p>
       {/* <button style={style} onClick={this.switchNameHandler.bind(this, "Max!")}>Click me</button> */}
       <button className={btnClass} onClick={ props.clicked }>Toggle Persons</button>
    </div>
   );
};

export default cockpit;