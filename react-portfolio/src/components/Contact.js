import React from "react";
import '../css/Contact.css'

function Contact() {
    return(
      <div className="contact">

        <section class="contact-wrap">
  <form action="" class="contact-form">
    <div class="col-sm-6">        
    <h2>Contact Me</h2>
      <div class="input-block">
        <label for="">First Name</label>
        <input type="text" class="form-control"></input>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="input-block">
        <label for="">Last Name</label>
        <input type="text" class="form-control"></input>
      </div>
    </div>
    <div class="col-sm-12">
      <div class="input-block">
        <label for="">Email</label>
        <input type="text" class="form-control"></input>
      </div>
    </div>
    <div class="col-sm-12">
      <div class="input-block">
        <label for="">Message Subject</label>
        <input type="text" class="form-control"></input>
      </div>
    </div>
    <div class="col-sm-12">
      <div class="input-block textarea">
        <label for="">Drop your message here</label>
        <textarea rows="3" type="text" class="form-control"></textarea>
      </div>
    </div>
    <div class="col-sm-12">
      <button class="square-button">Send</button>
    </div>
  </form>
  </section>
  <div className="footer">
    <ul>
      <li>Github</li>
      <li>Github</li>
      <li>Github</li>
      <li>Github</li>

    </ul>
  </div>
      </div>
      
    )
}

export default Contact;