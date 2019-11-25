import React from 'react';
import './Projects.scss';

const Projects = ({ title, items }) => (
  <div>
    <div id='projects-preview'>
      {
        items.map((item, idx) => (
          <div key={idx} className='project-preview'>
            <h4>{item.title}</h4>
            <p>{item.subtitle}</p>
            <div>
              {
                item.images.filter((image, idx) => idx < 1).map((image, idx) => (
                  <div key={idx}>
                    <img className='project-preview-img' src={image} alt='' />
                  </div>
                ))
              }
            </div>
            <div className='project button-box'>
              <button className='btn btn-sm'><a href={item.github} target='_blank' rel="noopener noreferrer">Project Page</a></button>
              <button className='btn btn-sm'><a href={item.github} target='_blank' rel="noopener noreferrer">Github</a></button>
              <button className='btn btn-sm'><a href={item.website} target='_blank' rel="noopener noreferrer">Visit Site</a></button>
            </div>
          </div>
        ))
      }
    </div>
  </div>
)

export default Projects;