import React, { Component } from 'react';
import './TechButtons.scss';

class TechButtons extends Component {
  render() {
    return (
      <div id='tech-buttons-box'>
        <div className='button-box'>
          <button className='btn btn-sm'>React.js</button>
          <button className='btn btn-sm'>Node.js</button>
          <button className='btn btn-sm'>MongoDB</button>
          <button className='btn btn-sm'>Mongoose</button>
          <button className='btn btn-sm'>JSON Web Tokens</button>
          <button className='btn btn-sm'>SASS</button>
          <button className='btn btn-sm'>Fetch API</button>
          <button className='btn btn-sm'>ReactStrap</button>
          <button className='btn btn-sm'>Bootstrap</button>
          <button className='btn btn-sm'>Express.js</button>
        </div>
      </div>
    )
  }
}

export default TechButtons;