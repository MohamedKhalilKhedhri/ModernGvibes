import React from 'react'
import Hero from '../components/Hero'
import contactImgDesktop from '../assets/Contact-banner-desktop.jpg'

function Contact() {
  return (
    <div className=''>
        <Hero srcset={{large:contactImgDesktop,medium:contactImgDesktop,small:contactImgDesktop}}  />
    </div>
  )
}

export default Contact