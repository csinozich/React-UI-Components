import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'


const App = props => {
  return (
    <div className='calculator-style'>
      <CalculatorDisplay />
      <container>
        <ActionButton className = 'action-button' text='clear' />
        <NumberButton className='red-button' text='/'/>
      </container>
      <container>
        <NumberButton className = 'white-button' text='7' />
        <NumberButton className = 'white-button' text='8' />
        <NumberButton className = 'white-button' text='9' />
        <NumberButton className = 'red-button' text='X' />
      </container>
      <container>
        <NumberButton className = 'white-button' text='4' />
        <NumberButton className = 'white-button' text='5' />
        <NumberButton className = 'white-button' text='6' />
        <NumberButton className = 'red-button' text='-' />
      </container>
      <container>
        <NumberButton className = 'white-button' text='1' />
        <NumberButton className = 'white-button' text='2' />
        <NumberButton className = 'white-button' text='3' />
        <NumberButton className = 'red-button' text='+' />
      </container>
      <container>
        <ActionButton className = 'action-button' text='0' />
        <NumberButton className = 'red-button' text='=' />
      </container>
    </div>
  )
}

export default App;
