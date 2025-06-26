import React from 'react';
import Magnet from './Magnet';
import AnimatedContent from './AnimatedContent';

const projects = [
    {
        date: '2025',
        title: 'portfolio-site',
        description: `Built a personal portfolio with dark/light mode toggle, animated transitions, and responsive design using Next.js and Tailwind.`,
    },
    {
        date: '2024 - 2025',
        title: 'ft_transcendence',
        description: `Developed a full-stack web app with real-time multiplayer games, chat system, and secure user authentication with 2FA using modern technologies like React, WebSockets, and JWT.`,
    },
    {
        date: '2024',
        title: 'INCEPTION',
        description: `Created three containers using Docker to run a fully containerized web server environment.`,
    }

];

const Project_desc = () => {
    return (
        <>
            {projects.map((project, index) => (
                // <Magnet key={index} className="w-full">
                <AnimatedContent

                    distance={150}
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    delay={0.3}

                >
                    <div key={index} className=" flex w-fit mb-6 hover:bg-[#333847] hover:rounded-2xl hover:cursor-pointer transition-all duration-300 ease-in-out p-3">
                        <div className="date_proj text-xl flex items-center px-3 text-[var(--color-accent)] w-fit">
                            {project.date}
                        </div>
                        <div className="flex flex-col name_and_desec">
                            <div className="name flex">
                                <h1 className="text-xl font-bold md:text-3xl">{project.title}</h1>
                            </div>
                            <div className="descr text-[var(--color-text-secondary)] text-sm md:text-lg">
                                {project.description}
                            </div>
                        </div>
                    </div>
                </AnimatedContent>
                // </Magnet>
            ))}
        </>
    );
};

export default Project_desc;
