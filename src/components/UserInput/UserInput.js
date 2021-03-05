import React from 'react';

const userInput = (props) =>{
	const style = {
      border: '2px solid red'
    }
   return <input type="text" style={style} onChange={props.inchanged} value={props.currentName} /> 
};

export default userInput;