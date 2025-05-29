import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import DrawOutlineButton from '../components/DrawOutlineButton';

const Contacts = () => {
    return (
        <div className='flex flex-col items-center mb-20 mt-20 md:mt-80 p-5 w-full'>
            <h1 className='text-4xl mb-10 md:text-6xl md:mb-20'>Contact</h1>
            <div className="proj_list flex items-center justify-center gap-30 max-w-2xl w-full">

                <a href="https://github.com/msbayman">
                    <DrawOutlineButton>
                        <div className="flex items-center justify-center">
                    <FaGithub className="mr-2" />
                        GitHub
                        </div>
                    </DrawOutlineButton>
                </a>
                
                <a href="https://www.linkedin.com/in/ayman-msaoub/">
                    <DrawOutlineButton>
                        <div className="flex items-center justify-center">
                            <FaLinkedin className="mr-2" />
                            linkedIn
                        </div>
                    </DrawOutlineButton>
                </a>


            </div>
        </div>
    );
};

export default Contacts;
