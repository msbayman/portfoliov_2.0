import React from 'react'
import Skill_div from '../components/Skill_div'



const skills: string[] =
    [
        'Html',
        'Css',
        'Javascript',
        'Typescript',
        'React',
        'Nextjs',
        'Tailwindcss',
        'Redux',
        'Rest api',
        'Git',
        'Docker',
        'Bash',
        'C',
        'C++',
        'Django'
    ]


const About = () => {
    return (
        <div className='flex flex-col max-h-min  md:flex-row' >
            <section className=' flex flex-1 flex-col items-center justify-center p-5'>
                <h1 className='text-4xl mb-10  md:text-6xl md:mb-8'>About Me</h1>
                <p className='text-lg text-start max-w-2xl'>
                    My path in tech began with hands-on projects using C, C++, Bash, Git, and Docker — laying a strong foundation in low-level programming and problem-solving. Over time, I gravitated toward the frontend world, where I found my passion in building clean, responsive, and accessible web applications.</p>
                <br />
                <p className='text-lg text-start max-w-2xl mt-4'>

                    While I have solid full-stack experience — including Django for scalable backend APIs — my focus has shifted toward frontend development. I enjoy crafting elegant user interfaces with React and TypeScript, and I thrive on turning ideas into smooth, intuitive digital experiences. As a frontend developer, I’m driven by performance, visual precision, and creating seamless interactions that users love. </p>
            </section>
            <section className='flex flex-1 flex-col items-center   p-5'>
                <h1 className=' text-4xl  mb-10   md:text-6xl md:mb-8'>Skills</h1>
                <div
                    className='flex flex-wrap justify-center gap-4 max-w-2xl'>
                    {skills.map((skill, index) => (
                        <Skill_div key={index} text={skill} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default About