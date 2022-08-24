import './App.css';
import React from 'react';
import {connect} from 'react-redux';
import { SwithchOn, SwitchOf} from './actions';


function  App({value, SwithchOn, SwitchOf}) {

 /* let lightedness ;

  const changestatus = ()=>{
    if(value === true){
      lightedness = "lit";
      return SwitchOf;
    }else{
      lightedness = "dark";
      return SwithchOn;
    }
  }*/

  return (
    <>
    <center>
    <h1>sdvsdgv</h1>
    
    </center>
    </>
  );
}



const mapStateToProps = state =>({
value : state
})

export default connect(mapStateToProps,{SwithchOn,SwitchOf})(App);