import React, { Component,useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


//class component
class InputwithClassComponent extends Component
{
  constructor(props){
    super(props);
    this.state = { name: props.name };
  }
  
  render(){
    return(
      <input type="text" value={this.state.name} onChange={ e => {
        this.setState({ name: e.target.value });
      } }></input>
    )
  }
}


//functional component -Hooks
//add useState
function InputwithFunctionalComponent()
{
  const [name, setName] = useState('');
  return(
    <input type="text" value={name} onChange={ e => {setName( e.target.value);} }></input>
  )
}

//useEffect
function Counter()
{
  const [count, setCount] = useState(0);

  useEffect(() => {
    if(count<0){
      setCount(0);
    }
  }, [count]);

  function SelfMinus(){
      setCount(count-1)
      /*if(count<0)
      {
        setCount(0)
      }*/
  }

  return(
    <div>
      <button onClick={()=>SelfMinus()}>--</button>
      <button onClick={()=>setCount(count-1)}>-</button>
      {count}
      <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <InputwithClassComponent name='vicky'></InputwithClassComponent>
        <InputwithFunctionalComponent iniName='vicky Hooks'></InputwithFunctionalComponent>
        <Counter></Counter>
      </div>
    );
  }
}

export default App;
