import React from 'react'
import Skill_div from '../components/Skill_div'

const About = () => {
    return (
        <div className='flex flex-col md:flex-row' >
            <section className=' flex flex-1 flex-col items-center justify-center p-5'>
                <h1 className='text-4xl mb-4 md:text-6xl md:mb-8'>About Me</h1>
                <p className='text-lg text-start max-w-2xl'>
                    My path in tech began with hands-on projects using C, C++, Bash, Git, and Docker — laying a strong foundation in low-level programming and problem-solving. Over time, I gravitated toward the frontend world, where I found my passion in building clean, responsive, and accessible web applications.</p>
                <br />
                <p className='text-lg text-start max-w-2xl mt-4'>

                    While I have solid full-stack experience — including Django for scalable backend APIs — my focus has shifted toward frontend development. I enjoy crafting elegant user interfaces with React and TypeScript, and I thrive on turning ideas into smooth, intuitive digital experiences. As a frontend developer, I’m driven by performance, visual precision, and creating seamless interactions that users love. </p>
            </section>
            <section className='flex flex-1 flex-col items-center   p-5'>
                <h1 className=' text-4xl  mb-4  md:text-6xl md:mb-8'>Skills</h1>
                <div
                className='flex flex-wrap justify-center gap-4 max-w-2xl'>
                <Skill_div text='Html'/>
                <Skill_div text='Css' />
                <Skill_div text='Javascript' />
                <Skill_div text='Typescript' />
                <Skill_div text='React' />  
                <Skill_div text='Nextjs' />
                <Skill_div text='Tailwindcss' />
                <Skill_div text='Redux' />
                <Skill_div text='Rest api' />
                <Skill_div text='Git' />
                <Skill_div text='Docker' />
                <Skill_div text='Bash' />
                <Skill_div text='C' />
                <Skill_div text='C++' />
                <Skill_div text='Django' />
                </div>
            </section>
        </div>
    )
}

export default About