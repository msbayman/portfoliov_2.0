

import React from 'react';

interface BtnAccentGreenProps {
    text: string;
}

const Btn_accent_green: React.FC<BtnAccentGreenProps> = ({ text }) => {
    return (
        <button className="w-fit px-4 py-2 text-sm font-medium text-white bg-[var(--color-accent-dark)] rounded-md shadow-sm ml-10 hover:bg-[var(--color-accent)] cursor-pointer transition-colors duration-200 md:text-lg lg:text-lg lg:px-6 lg:py-3">
            {text}
        </button>
    );
};

export default Btn_accent_green;
