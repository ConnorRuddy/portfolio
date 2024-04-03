import React from 'react'
import './Social.css'
import {FaLinkedin} from 'react-icons/fa'
import {GoMail} from 'react-icons/go'
import {FaGithub} from 'react-icons/fa'

export const Social = () => {
  return (
    <div className='social-container'>
          <a href='https://www.linkedin.com/in/connor-ruddy-383524265/'><FaLinkedin className='social-img' id='linkedin'/></a>
          <a href='www.github.com'><FaGithub className='social-img' id='github'/></a>
          {/* <a href='mailto:connor.ruddy@icloud.com'><GoMail className='social-img' id='email'/></a> */}
    </div>
  )
}
