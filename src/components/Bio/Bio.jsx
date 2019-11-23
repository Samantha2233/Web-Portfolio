import React from 'react';
import './Bio.scss';

const Bio = () => {
  return (
    <div>
      <h3>Bio</h3>
      <p id="bio">I have been practicing design and programming in San Francisco, California for 4 years.
          I first came here for the Academy of Art's Web Design and New Media program. In that time, I found
          out how to build prototypes, how to animate, and learned lots about
          Graphic Design, Brand Identity and User Experience.
          <br></br>
        <br></br>
        After that, I was eager to figure
        out how to make my ideas come to life by programming them! So I took on the Software Engineering
        Immersive course at General Assembly.Here, I learned how to work with databases, API's, forms,
        routing, authentication, etc. - Which all ultimately contribute to building real - world
          Full - Stack applications!</p>
      <div class="button-box">
        <button class="btn btn-sm btn-outline-dark"><a href="./Resume-SamanthaShackelford.pdf" download> <i class="fas fa-file-download"></i> Download Resume</a></button>
      </div>
      <img id="portrait" src="./images/portrait.JPG" alt="Portrait (shot by Edden Amber" />
      <a href="https://www.instagram.com/edden" id="edden" >photo by @edden</a>
    </div>
  )
}

export default Bio;