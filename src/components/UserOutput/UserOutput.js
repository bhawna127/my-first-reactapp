import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
   return (
   	  <div className="UserOutput">
   	    <p>Username : {props.username}!</p>
   	    <p>I hope it will work!</p>
   	  </div>
   	);
};

export default userOutput;