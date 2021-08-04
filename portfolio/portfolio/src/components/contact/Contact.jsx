import React from 'react'
import './Contact.scss';
import {useState} from 'react'
function Contact() {
const[message,setMessage]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className='contact' id='contact'>
           <div className="left">
               <img src='https://buchitech.com.ng/wp-content/uploads/2021/02/contactme.png' alt=''/>
           </div>
           <div className="right">
               <h2>Contact me </h2>
               <form onSubmit={handleSubmit} >
                   <input type="text" placeholder='Email' />
                   <textarea placeholder='Message'></textarea>
                   <button type='submit'>Send</button>
                   {message?<span>Thanks</span>:''}
               </form>
           </div>
        </div>
    )
}

export default Contact
