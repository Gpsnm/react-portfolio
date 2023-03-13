/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../css/Contact.css'
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {TfiEmail} from 'react-icons/tfi'
import {FcDocument} from 'react-icons/fc'


const ContactForm = () => {
  const [state, handleSubmit] = useForm("xgebzygw");
  return (
    <div className='form-container'>
      <div className='form-wrapper'>
      <form onSubmit={handleSubmit} className="form">
       <h2>Get in Touch</h2>
      <label htmlFor="name">
      Name
      </label>
      <input
        id="name"
        type="name" 
        name="name"
      />
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className="submit">
        Submit
      </button>  
    </form>
    <div className='socials'>
      <h2>How to Reach Me</h2>
      <div className='Linkedin'><a target="blank" href='https://www.linkedin.com/in/adam-willetts/'> <FaLinkedin /></a><h3>Linkedin</h3></div>
      <div className='Linkedin'><a target="blank" href='https://github.com/Gpsnm'> <BsGithub /></a><h3>Github</h3></div>
      <div className='Linkedin'><a  href='mailto:adam-willetts@hotmail.co.uk'><TfiEmail /></a><h3>Email</h3></div>
      <div className='Linkedin'><a target="blank" href='https://docs.google.com/document/d/1d_NJ3nVNHfQVF68cXjsFXEPOsxXVzWZoVWMfsh3ReUc/edit?usp=sharing'><FcDocument /></a><h3>Resume</h3></div>


    </div>
    </div>
    </div>
  )};

  export default ContactForm;