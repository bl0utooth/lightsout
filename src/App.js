import React from 'react';
import './App.css';
import Title from './BoardComps/Title/Title';
import Board from './BoardComps/Board';

const App = () => (
  <div className='App'>
    <Title />
    <Board size={5}/>
  </div>
)

export default App;
