import React,{Component} from 'react';

class ErrorBoundary extends Component{
   state ={
       hasError: false,
       errorMsg: ''
   }

   componentDidCatch = (error, info)=>{
       this.setState({ hasError: true, errorMsg: error});
   }
  render(){
      if(this.state.hasError){
          return <p>{this.state.errorMsg}</p>;
      }else{
        return <div>{this.props.children}</div>;
      }
    
  }
}

export default ErrorBoundary;