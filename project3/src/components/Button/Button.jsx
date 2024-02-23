import React from 'react'
// import { MdOutlineMessage } from "react-icons/md";
// import { IoCall } from "react-icons/io5";
import "./Button.css"
export default function Button(props) {
  return (
    <div className='primary'>
    {props.icon}
    {props.text}
    </div>
  )
}
