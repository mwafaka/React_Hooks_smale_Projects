import React,{Component,Fragment} from 'react';

class QuoteMachine extends Component{
 

    constructor(props){
        super(props);
        this.state= {
            items:[]
        }
      }
      random=()=>{
       
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(res=>res.json())
        .then(data=> {
          let qouteData= data.quotes;
          let  randomNumber=Math.floor(Math.random()*qouteData.length);
          let randomData=qouteData[randomNumber]
          console.log(randomData)
          this.setState({randomData:this.state.items})
        })
        
        
      

      }


    render(){
       
        return(
            <Fragment>
               <h1>Quote Machine</h1>
               <button onClick={this.random}>Random</button>
           
              <h2>{this.state.items}</h2> 
            

            </Fragment>
        )
    }
}
export default QuoteMachine;