import React from 'react';
import '../css/contact.css';
import myImg from '../assets/my-img.svg'

export default function Contact() {
  return (
    <>
    <div className='contact bg-green'>
        <div className='contact-heading'>
            <h1 className='bold gray'>INTERESTED?</h1>
            <h1 className='bold gray'>LET{'’'}S TALK!</h1>
        </div>
        <div className='contact-heading'>
            <h2 className=' gray'>or contact us at</h2>
            <a href="mailto:info.ayushkumar@gmail.com" className=' gray'>info.ayushkumar@gmail.com</a>
        </div>
        <div className='form-container' style={{borderRadius:'50px'}}>
            <div className='form-img'>
                <img src={myImg} alt=''/>
            </div>
            <div className='form-text bg-gray green'>
                <label>
                    <h2>What's your name?</h2>
                    <input type='text' placeholder='Ayush'/>
                </label>
                <label>
                    <h2>What's your e-mail?</h2>
                    <input type='email' placeholder='Your@email.here'/>
                </label>
                <label>
                    <h2>Your message-</h2>
                    <textarea rows={6} placeholder='type here..'/>
                </label>
                <div className='form-btn-div'>

                <button className='gray bold bg-green'>SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
