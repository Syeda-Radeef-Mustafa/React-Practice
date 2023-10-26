import React, { useState, useEffect } from 'react';
import UserData from '../../component/userdata';
import Patient from '../../component/patient';


function Contact() {
  return(
  <div className='contact-container'>
      <UserData/>
      <Patient/>
  </div>
  )
  }
  

  
export default Contact;
