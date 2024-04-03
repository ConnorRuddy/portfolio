import React from 'react'
import aboutimg from '../components/images/about.jpeg'
import './Css/Contact.css'
import moon from '../components/images/moon.jpeg'

const PNG_FILE_URL = 'http://localhost:5173/resume.pdf'

function Contact() {
  const downloadFile=(url) => { 
    const fileName = url.split('/').pop()
    const anchorTag = document.createElement('a')
    anchorTag.href = url;
    anchorTag.setAttribute('download', fileName)
    document.body.appendChild(anchorTag)
    anchorTag.click();
    anchorTag.remove();
  };
  return (
    <div className='contact-container'>
    <div className="contact-background">
      <img src={moon} className='contact-img'/>
      <div className='contact-info-container'>
      <div className="about-img-container">
        <img src={aboutimg} className='about-img'/>
        </div>
      <div className="about-info">
        <h2 classname="about-title">ABOUT ME</h2>
      
          <div className="me">
            <p>Full Stack Web Developer and UX designer with a proven ability to deliver robust, effective products in collaborative settings under strict and often tight time constraints.Always seeking personal growth, I expanded my coding acumen through a 1,000+ hour coding Bootcamp all while working full time in the maritime industry. I am now eager to tackle more complex challenges and continue my development journey utilizing the skills I've acquired to solve real-world problems.</p>
            </div>
            <div className="button-container">
              <button onClick={()=>{downloadFile(PNG_FILE_URL);}}className='resume-button'>Download Resume</button>
              <a href="https://www.linkedin.com/in/connor-ruddy/"><button className='linkdin-button'>LinkdIn</button></a>
              <a href="mailto:c.ruddy19@gmail.com?subject=Web Development"><button className='email-button'>Email</button></a>
         </div>
         </div>
        </div>
        </div>
     </div>
   
  )
}

export default Contact
