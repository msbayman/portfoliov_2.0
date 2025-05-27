import React from 'react'
import Project_desc from '../components/Project_desc'

const Projects = () => {
    return (
        <div className='flex flex-col  items-center mt-80 p-5 w-full'>
            <h1 className='text-4xl  md:text-6xl md:mb-20'>Projects</h1>
            <div className="proj_list flex flex-col items-center justify-start gap-10 max-w-2xl w-full">

                <Project_desc />
            </div>

        </div>
    )
}

export default Projects