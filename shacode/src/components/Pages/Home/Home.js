import React from 'react'

import '../Home/home.css';


import HeroBg from '../Home/Hero-Bg.jpeg';


const bg = '../Home/Hero-Bg.jpeg';


export default function Home() {
  return (
    <>


      <div className='Hero-HomePage' style={{backgroundImage: "url(" + HeroBg + ")"}}><p>Suresh</p></div>
      
    
    </>
  )
}
