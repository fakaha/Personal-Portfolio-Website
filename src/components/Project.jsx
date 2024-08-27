import React from 'react'
import project1 from '../assets/todoProject.webp'
import project2 from '../assets/movieProject.webp'
import project3 from '../assets/courseProject.webp'
import project4 from '../assets/project4.webp'
import project5 from '../assets/emporium-z.webp'

const Project = () => {
  const goto = (project) =>{
    window.open(project)
  }
  return (
    <section id='projects' className='project flex flex-col justify-center lg:mx-12 mx-8 pt-32 px-8'>
        <h2 className='text-2xl text-center mb-5 font-bold'>Projects</h2>
        <div className='flex flex-wrap gap-8 lg:gap-x-6 justify-center mt-5'>
            <div className='project-content lg:w-[30%] w-full'>
              <img className='w-80' src={project1} alt="" onClick={() => goto('https://local-todo-apps-zul.vercel.app/')}/>
              <p>Todo List website that uses local storage to save data without a database.</p>
            </div>
            <div className='project-content lg:w-[30%] w-full'>
              <img className='w-80' src={project2} alt="" onClick={() => goto('https://challenge-06-zulfa-fakaha.vercel.app/')}/>
              <p>Movie Website that displays several movies using a public API.</p>
              </div>
            <div className='project-content lg:w-[30%] w-full'>
              <img className='w-80' src={project3} alt="" onClick={() => goto('https://fpbinar-kel7.vercel.app/')}/>
              <p>Online Course website that features buying and watching for its users using a custom API.
                <br />
              (This project was created while I was participating in the Independent Study Batch 5 as a <span className='text-secondary'>Front End</span> for the final project)</p>
            </div>
            <div className='project-content lg:w-[30%] w-full'>
              <img className='w-80' src={project4} alt="" onClick={() => goto('https://quranku-tau.vercel.app/')}/>
              <p>Quran website that features reading for its users using a API public.
              </p>
            </div>
            <div className='project-content lg:w-[30%] w-full'>
              <img className='w-80' src={project5} alt="" onClick={() => goto('https://emporium-z.vercel.app/')}/>
              <p>Store website that features login, register, and adding items to cart for its users using a public API.
              </p>
            </div>
        </div>
    </section>
  )
}

export default Project