import React from 'react'

function Footer() {
    const footerYear = new Date().getFullYear()

  return (
    <footer className='footer p-5 bg-gray-700 text-primary-content footer-center text-white'>
        <div>
            <p>Copyright &copy; {footerYear} All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer