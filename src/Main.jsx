import React from 'react'
import profilepic from '../assets/profilepic.jpg'
import Button from './Button'
const Main = () => {
  return (
    <>
    <div className='Container'>

    <div className='profileimg'>
    <img className="img" src={profilepic} alt="profle photo" />
    </div>

<h1 id="heroline"><span className='name'>I am Smita Patil</span>,Full stack<br/> web developer based in India</h1>
<h4 className='secondary_text'>I am a Fullstack Developer from India,completed Computer Science<br/> MCA and Full stack web certification!
</h4>
<div className='btnContainer'>
<Button name="Connect With Me"></Button>
<Button name="My Resume"></Button>
</div>
</div>
</>

  )
}

export default Main
