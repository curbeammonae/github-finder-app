import React from 'react'


export default function Footer() {

    const footerYear = new Date().getFullYear()

  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
        <p>Copyright; {footerYear} All Rights Reserved</p>
    </footer>
  )
}
