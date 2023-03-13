import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../css/Contact.css'

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
      <div className='Linkedin'>linkedin</div>

    </div>
    </div>
    </div>
  )};

  export default ContactForm;