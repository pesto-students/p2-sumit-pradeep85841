import './App.css';
import React from 'react';
import {connect} from 'react-redux';
import { IncAction } from './actions';
import { ResetAction } from './actions';

function App({stepcount, IncAction, ResetAction}) {

  return (
    <center>
      <div>
       <h1>You've walked {stepcount} steps today!</h1>
       <br />
       <button className='add' onClick={IncAction}>Add a stepcount</button>
       <button className='reset' onClick={ResetAction}>Reset Steps</button>
      </div>
    </center>
  )
}

const mapStateToProps = state =>({
 stepcount : state
})

export default connect(mapStateToProps,{IncAction,ResetAction})(App);