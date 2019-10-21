import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createEmitAndSemanticDiagnosticsBuilderProgram } from 'typescript';
import agenda  from './Agenda';
import { string } from 'prop-types';
import Moment from 'react-moment';
import { mapAgenda,mapTalk } from './Convert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { read } from 'fs';

const dictionary=mapAgenda(agenda);
class TalkInfo extends React.Component
{
  render(){
    return(
      <div>
        {
          this.props.talks.map(item =>{
            return (
              <div>
                <p>
                 {item.title}-{item.speaker}
                </p>   
               <br></br>     
              </div>
            )
          })
        }
      </div>
    )
  }
}

class TimeSlot extends React.Component
{
   render(){
     return(
       <div>
         {
           Object.keys(this.props.talks).map(item=>{
             return (
               <div>
                 <h3>{item}</h3>
                 <TalkInfo talks={this.props.talks[item]}></TalkInfo>  
               </div>   
             )
           })
         }
         
       </div>
     )
   }
}
 
class RouteEntry extends React.Component
{
  
  render(){
    const talks=dictionary[this.props.day];
    const temp_dic=mapTalk(talks)
    return(
      <div>
        <h1>{this.props.day}</h1>
        <TimeSlot talks={temp_dic}></TimeSlot>
        
      </div>
    )
  }
}

class Links extends React.Component
{
  render(){
    return(
      <div>
        <ul>
          {
            Object.keys(dictionary).map(key=>{
                  return(
                    <li><a href={"/index/"+key}>{key}</a></li>           
                  )              
                })
          }
        </ul>
      </div>
    )
  }
}

class App extends React.Component {
  
  render() {
    return (
      
      <div className="App">
       <header className="App-header">
        NDC Sydney Agenda
       </header>     z  
       <Router>   
        <div>
        <Links />        
          <Switch>
            {
              Object.keys(dictionary).map(key=>{
                return(            
                  <Route extact path={"/Index/"+key}>
                    <RouteEntry day={key} ></RouteEntry>
                  </Route>
                )              
              })
            }
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
