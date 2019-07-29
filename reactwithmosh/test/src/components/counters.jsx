import React, { Component } from 'react';
import Counter from './counter'
class Counters extends Component {
   
     
    render() { 
        return ( <div>
            <button onClick={this.props.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
           {this.props.counters.map(counte=>
           <Counter 
         
           onDelete={this.props.handleDelete} 
           onIncrement={this.props.handleIncrement}
           counte={counte}> </Counter> )}
        </div> );
    }
}
 
export default Counters;