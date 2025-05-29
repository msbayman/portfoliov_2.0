// components/Experience.tsx
import React from 'react';
import ItemList from '../components/ItemList';


const experiences = [
    {
        date: '2025-05 - Present',
        title: 'Frontend Developer',
        description: `Contributed to the development of a SaaS platform for Geree, focused on smart task scheduling and calendar management. Built responsive and accessible UI components using Next.js and Tailwind CSS. Integrated Bybland AI to enhance UX with real-time task suggestions and prioritization. Collaborated with backend devs using Swagger-documented APIs. Set up frontend CI/CD pipelines with GitHub Actions to streamline deployments and ensure consistent production releases.`,
    }
]
const Experience = () => {
    return (
        <div className='flex flex-col items-center mt-20 md:mt-80 p-5 w-full'>
            <h1 className='text-4xl mb-10 md:text-6xl md:mb-20'>Experiences</h1>
            <div className="proj_list flex flex-col items-center justify-start gap-10 max-w-2xl w-full">
                <ItemList items={experiences} />
            </div>
        </div>
    );
};

export default Experience;
