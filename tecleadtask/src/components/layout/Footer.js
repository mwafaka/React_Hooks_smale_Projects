import React,{Fragment} from 'react';

const Footer=(props)=>{
  return(
    <div className="footer">
<p>CURRENTLY PLAYING</p>

    {
      props.activeRadioHandler !== null &&
        <Fragment>
          <p>{props.activeRadioHandler}</p>
        </Fragment>
    }
    </div>
  )
}
export default Footer;