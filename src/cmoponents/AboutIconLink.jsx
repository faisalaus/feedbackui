import React from 'react'
import { SiAdblock } from 'react-icons/si'
import { Link } from 'react-router-dom'

const AboutIconLink = () => {
  return (
    <div className='about-link'>
      <Link to='/about'>
        <SiAdblock size={30} />
      </Link>
    </div>
  )
}

export default AboutIconLink
