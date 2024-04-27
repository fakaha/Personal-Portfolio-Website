import React from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

const Project = () => {
  return (
    <section id='projects' className='project bg-primary d-flex flex-column justify-center align-center'>
        <h2 className='text-light'>My Project</h2>
        <div className='containerProjects d-flex justify-center flex-wrap'>
            <img src={project1} alt="" />
            <img src={project2} alt="" />
            <img src={project3} alt="" />
        </div>
    </section>
  )
}

export default Project