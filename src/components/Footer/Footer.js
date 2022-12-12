import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
     <div className="footer-notes text-center mt-3">
        <h5>Created By Anand | <a href='https://github.com/AnandShirbhaiyye/notes-store'>Source Code</a></h5>
      </div>
    </>
  )
}

export default Footer