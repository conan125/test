import React from 'react'     
import Router from 'next/router'

function About() {
  console.log("A",Router)
  return <div>About
      <button onClick={()=>Router.push('/')} >前往demo页</button>

  </div>
}




export default About
