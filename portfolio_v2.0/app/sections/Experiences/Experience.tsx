// components/Experience.tsx
import AnimatedContent from '@/app/components/AnimatedContent';
import ItemList from '@/app/components/ItemList/ItemList';
import React from 'react';



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


                <AnimatedContent
                    distance={150}
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    // ease="bounce.out"
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    delay={0.3}
                >
                    <ItemList items={experiences} />
                </AnimatedContent>

            </div>
        </div>
    );
};

export default Experience;
