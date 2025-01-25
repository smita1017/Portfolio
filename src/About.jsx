import React from 'react'
import NavBar from '../Component/NavBar'
import Profilepic from '../assets/profilepic.jpg'
const About = () => {
  return (
    <section>
      <div className='section_title'>About Me!</div>
      <div className='About_main'>
        <div className='left'><img src={Profilepic} alt="" /></div>
        <div className='right'>
          <div className='About_Discription'><p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
<p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p></div>
          <div className='About_skill'>
            <div className='skill'>
              <h3>HTML & CSS</h3>
              <hr id='htmlcss'/>
              </div>
              <div className='skill'>
              <h3>JavaScript</h3>
              <hr id='javascript'/>
              </div>
              <div className='skill'>
              <h3 >React</h3>
              <hr id='react'/>
              </div>
              <div className='skill'>
              <h3>TailwindCSS</h3>
              <hr id='tailwindcss'/>
              </div>
          </div>
        </div>
      </div>
      <div className='About_footer'>
      <div className="footerdesign">
      <h4 className='footerexperiance'>Fresher</h4>
      <p>2   year of industry Experiance</p>
      </div>


     <div className='midhr'></div>

      <div className="footerdesign">
      <h4 className='footerexperiance'><a href="">3 major project</a></h4>
      <p><a href="">small projects</a></p>
      </div>
      </div>
     
    </section>
  )
}

export default About
