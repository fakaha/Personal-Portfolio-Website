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
            <div className='project-content'>
              <img src={project1} alt="" onClick={() => goto('https://local-todo-apps-zul.vercel.app/')}/>
              <p>Todo List website that uses local storage to save data without a database.</p>
            </div>
            <div className='project-content'>
              <img src={project2} alt="" onClick={() => goto('https://challenge-06-zulfa-fakaha.vercel.app/')}/>
              <p>Movie Website that displays several movies using a public API.</p>
              </div>
            <div className='project-content'>
              <img src={project3} alt="" onClick={() => goto('https://fpbinar-kel7.vercel.app/')}/>
              <p>Online Course website that features buying and watching for its users using a custom API.
                <br />
              (This project was created while I was participating in the Independent Study Batch 5 as a <span className='text-secondary'>Front End</span> for the final project)</p>
            </div>
        </div>
    </section>
  )
}

export default Project