// const sound= new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
const audio=document.getElementById('beep');

class App extends React.Component{
  constructor(props){
    super(props)
    const {loop}=this.state
  }
  state={
    breakCount:5,
    sessionCount:25,
    clockCount:25*60,
    currentTimer:'Session',
    isPlaying:false,
    loop:undefined
  }
   componentWillUmount(){
    clearInterval(this.loop)
  }

  handlePlayPause=()=>{
    const{isPlaying}=this.state;
    
    if(isPlaying){
      clearInterval(this.loop)
       this.setState({
       isPlaying:false
    })
      
    }else{
          this.setState({
          isPlaying:true
    }) 
      this.loop=setInterval(()=>{
        const{clockCount,currentTimer,breakCount,sessionCount}=this.state;
        if(clockCount===0){
          this.setState({
            currentTimer:(currentTimer==='Session')?'Break':'Session',
            clockCount:(currentTimer==='Session')?(breakCount*60):(sessionCount*60)
          })
          audio.play();
          
        }else{
           this.setState({
          clockCount:clockCount -1
        })
        }
       
      },1000);
 }
    
  }
  handleReset=()=>{
    this.setState({
    breakCount:5,
    sessionCount:25,
    clockCount:25*60,
    currentTimer:'Session',
    isPlaying:false,
    })
     clearInterval(this.loop);
 
        audio.pause();
        audio.currentTimer = 0;
     
  
   
  }
 
  
  convertToTime=(count)=>{
    let minutes=Math.floor(count/60);
    let seconds=count%60;
    minutes = minutes<10?('0'+minutes):minutes;
    seconds = seconds<10?('0'+seconds):seconds;
    return `${minutes}:${seconds}`
  }
handleBreakDecrease =()=>{
  const{breakCount,isPlaying,currentTimer}=this.state;
  if(breakCount>1){
    if(!isPlaying&&currentTimer==='Break'){
        this.setState({
            breakCount:breakCount - 1,
            clockCount:(breakCount-1) *60 
        })
    }else{
        this.setState({
            breakCount:breakCount - 1
          })
    }
  
  }
 
  
}
handleBreakIncrease=()=>{
  const{breakCount,isPlaying,currentTimer}=this.state; 
  if(breakCount<60){
    if(!isPlaying&&currentTimer==='Break'){
        this.setState({
            breakCount:breakCount + 1,
            clockCount:(breakCount+1) *60 
        })
    }else{
        this.setState({
            breakCount:breakCount + 1
          })
    }
  
  }
  
}
handleSessionDecrease=()=>{
  const{sessionCount,isPlaying,currentTimer}=this.state;
  if(sessionCount>1){
    if(!isPlaying&&currentTimer==='Session'){
        this.setState({
            sessionCount:sessionCount - 1,
            clockCount:(sessionCount-1) *60 
        })
    }else{
        this.setState({
            sessionCount:sessionCount - 1
          })
    }
  
  }
  
}
handleSessionIncrease=()=>{
  const{sessionCount,isPlaying,currentTimer}=this.state;
   if(sessionCount<60){
    if(!isPlaying&&currentTimer==='Session'){
        this.setState({
            sessionCount:sessionCount + 1,
            clockCount:(sessionCount+1) *60 
        })
    }else{
        this.setState({
            sessionCount:sessionCount + 1
          })
    }
  
  }
  
}
  
  render(){
    const{breakCount,sessionCount,clockCount,currentTimer,isPlaying}=this.state;
    const breakProps = {
      title:'Break Length',
      count:breakCount,
      handleDecrease:this.handleBreakDecrease,
      handleIncrease:this.handleBreakIncrease
    }
    const sessionProps = {
      title:'Session Length',
      count:sessionCount,
      handleDecrease:this.handleSessionDecrease,
      handleIncrease:this.handleSessionIncrease
    }
    return(<div>
          <div className='flex'>
         <SetTimer {...breakProps}/>
         <SetTimer {...sessionProps}/>  
         </div>
        <div>
          <div className='clock-container'>
            <h5 id="timer-label" >{currentTimer}</h5>
            <span id="time-left">{this.convertToTime(clockCount)}</span>
            <div className='flex'>
      <button id="start_stop" onClick={this.handlePlayPause}><i className={`fas fa-${isPlaying?'pause':'play'}`} /></button> 
    
    <button id="reset" onClick={this.handleReset}><i className="fas fa-sync" /></button> 
    </div>
          </div>
        </div>
    </div>)
  }
}
 

const SetTimer=(props)=>{
  const id=props.title.toLowerCase();
  return (
 <div className='timer-container'>
    <h4 id={`${id}-label`}>{props.title}</h4>
    <div className='flex actions'>
      <button  id={`${id}-decrement`} onClick={props.handleDecrease}><i className="fas fa-minus" /></button> 
    <span id={`${id}-length`}>{props.count}</span>
    <button id={`${id}-increment`} onClick={props.handleIncrease}><i className="fas fa-plus" /></button> 
    </div>
  </div>
)
} 

ReactDOM.render(<App/>,document.getElementById('app'));