import React from 'react'
import Button from '../Button/Button'
import "./StartGame.css"
export default function StartGame({ toggle }) {
  return (
    <div className='contain'>
      <div className='imgage1'>
        <img src="/images/dices.png" alt="" />
      </div>
      <div className='btn'>
        <h2>DICE GAME</h2>
        <Button onClick={toggle}></Button>
      </div>
    </div>
  );
}


