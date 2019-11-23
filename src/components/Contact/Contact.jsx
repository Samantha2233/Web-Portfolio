import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div>
      <h3>Contact</h3>
      <p>If you need someone who knows how to work at the intersection of design and
          development, I'm your
          gal! Please, feel free to
                    shoot me an email:</p>
      <div id="email">
      </div>
      <div class="button-box">
        <button class="btn btn-sm btn-outline-dark">
          <a href="mailto:sami.shackelford@gmail.com"> <i class="fas fa-paper-plane"></i>
            Email</a>
        </button>
        <button class="btn btn-sm btn-outline-dark"><a href="https://github.com/Samantha2233"
        ><i class="fab fa-github"></i> GitHub</a></button>
        <button class="btn btn-sm btn-outline-dark"><a
          href="https://www.linkedin.com/in/samanthashackelford/"><i
            class="fab fa-linkedin"></i> LinkedIn</a></button>
      </div>
    </div>
  )
}

export default Contact;