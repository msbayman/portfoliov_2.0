import React from 'react'


interface skill_name {
    text: string;
}


const Skill_div: React.FC<skill_name> = ({ text }) => {
    return (
        <div className='bg-[var(--color-accent-blue)] px-5 py-3 rounded-xl  text-[var(--color-accent)] hover:scale-150 cursor-default hover:text-[var(--color-accent-blue)] hover:bg-[var(--color-accent)] transition-all duration-500   '>{text}</div>
    )
}

export default Skill_div