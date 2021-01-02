import { Button,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component,Fragment} from 'react';

class QuoteMachine extends Component{
     constructor(props){
        super(props);
        this.state= {
            quote:'Never Blame your self, But learn from your Mistakes',
            author:'Mwafak Arbash'
        }
      }
      ///////////////
       random=()=>{ 
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(res=>res.json())
        .then(data=> {
          let qouteData= data.quotes;
          let  randomNumber=Math.floor(Math.random()*qouteData.length);
          let randomData=qouteData[randomNumber]
          
          this.setState({quote:randomData.quote,author:randomData.author
          })
        })
      } 



    render(){
       
        return(
            <Fragment>
              <Card  >
  <Card.Header  >Quotes</Card.Header>
  <Card.Body >
    <Card.Title >{this.state.author}</Card.Title>
    <Card.Text >{this.state.quote}</Card.Text>
    <Button  onClick={this.random} variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
              
            </Fragment>
        )
    }
}
export default QuoteMachine;