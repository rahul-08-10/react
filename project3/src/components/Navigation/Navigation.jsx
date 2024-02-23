import React from 'react'
import './Navigation.css' 
function Navigation() {
  return (
    <div className='container'>
        <div className='logo'>
            <img src="..\..\..\public\images\Frame1.png" alt="" />
        </div>
        <div className='lis'>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        </div>
    </div>
  )
}

export default Navigation