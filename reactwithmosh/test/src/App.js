import React, { Component } from 'react';
import Navbar from './components/navbar';  
import './App.css';
import Counters  from './components/counters';

class App extends Component {
  state = { 
    counters:[
        {id:1,value:0},
        {id:2,value:3},
        {id:3,value:0},
        {id:4,value:0},
    ]  
 }
 handleDelete=(id)=>{
     const counters=this.state.counters.filter(x=>x.id!==id)
     this.setState({counters})
 }
 handleReset=()=>{
     const counters=this.state.counters.map(c=>{
         c.value=0;
         return c
     })
     this.setState({counters})
 }
 handleIncrement = e => {
    const counters=[...this.state.counters];
    const index= counters.indexOf(e);
    // counters[index]={...e};
    counters[index].value++;
    this.setState({counters})

    }

  render() {
    return (
      <div>
     <Navbar totalCounters={this.state.counters.filter(c=>c.value>0).length}/> 
     <main className="container">
      <Counters
      counters={this.state.counters}
       handleReset={this.handleReset} handleDelete={this.handleDelete} handleIncrement={this.handleIncrement}/>
     </main>
     </div>
    );
  }
}

export default App;
