import React from 'react'

export default function navbar() {
  return (
    <>
    <nav className='navbar'>
      <div className='first-heading'>
     <p >find designer</p>
      <p >inspiration</p>
      <p  >Course</p>
      <p >Jobs</p>
      <p>Go pro</p>
      </div>
     <h2 id='name'>Dribble</h2>
     <div className='second-heading'>
      <div className="search-box">
      <i className="fa-solid fa-magnifying-glass icon"></i>
        <input type="text"placeholder='search.....' className='search-bar'/>
      </div>
      <button className="btn">Login </button>
      <button className="btn1">Signup </button>
      </div>
    </nav>

    {/* responsive navbar */}
    <div className="navbar2">
      <div className='nav2'>
        <div className='sec-nav'>
        <i class="fa-solid fa-bars bar"></i>
      <h2 id='name'>Dribble</h2>
      </div>
   </div>
   <div className='nav3'>
    <i className="fa-solid fa-magnifying-glass icon"></i>
    <button className="btn1">Signup </button>
    </div>
    </div>
    
    <div className="hero">
      <button className="hero-btn">Over 3 million ready to work creative</button>
      <p >The world's Destination <br />
     for design</p>

    </div>
    <p className='ek'>Get inspired by the work of millions of top-rated designers & agencies around the world.</p>
    <button className="start ">Get started</button>

    </>
  )
}












