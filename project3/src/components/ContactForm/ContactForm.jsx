import React from 'react'
import { IoCall } from "react-icons/io5";
import {MdOutlineMessage} from "react-icons/md"
import Button from '../Button/Button'
import "./ContactForm.css";

export default function ContactForm() {
  return (
    <div className='con'>
        <div className='form'>
            <Button text= 'VIA SUPPORT CHAT' icon={<MdOutlineMessage/>}/>
            <Button text='VIA CALL' icon={<IoCall /> }/>
        </div>
        <div className='bottom'>
          <Button  text= 'VIA EMAIL FORM '/>
        </div>
        <div>
          
        </div>
        <div className='images'>
          <img src="./images/Service.png" alt="" />
        </div>
    </div>
  )
}
