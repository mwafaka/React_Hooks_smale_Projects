import React, { Component } from 'react';


class Counter  extends Component {
 
   
  
  render() { 
        return ( 
        <div> 
          {this.props.children}
        <span className={this.getBadgeclasses()}>{this.formCount()}</span>
        <button 
        onClick={()=>this.props.onIncrement(this.props.counte)} 
        className='btn btn-secondary btn-sm'>Increment
        </button>
        <button onClick={ ()=>this.props.onDelete(this.props.counte.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        {/* <ul>
        {this.state.tags.map((tag)=><li key={tag}>{tag}</li>)}
        </ul> */}
        </div>
        );
 
}


    getBadgeclasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counte.value === 0 ? "warning" : "primary";
        return classes;
    }

    formCount(){
        const{value}=this.props.counte;
        return value===0?'Zero':value;
    }
}
 
export default Counter ;