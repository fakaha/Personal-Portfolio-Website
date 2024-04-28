import React from 'react'
import project1 from '../assets/todoProject.webp'
import project2 from '../assets/movieProject.webp'
import project3 from '../assets/courseProject.webp'

const Project = () => {
  const goto = (project) =>{
    window.open(project)
  }
  return (
    <section id='projects' className='project bg-primary d-flex flex-column justify-center align-center'>
        <h2 className='text-light'>My Project</h2>
        <div className='containerProjects d-flex justify-center flex-wrap'>
            <img src={project1} alt="" onClick={() => goto('https://local-todo-apps-zul.vercel.app/')}/>
            <img src={project2} alt="" onClick={() => goto('https://challenge-06-zulfa-fakaha.vercel.app/')}/>
            <img src={project3} alt="" onClick={() => goto('https://fpbinar-kel7.vercel.app/')}/>
        </div>
    </section>
  )
}

export default Project