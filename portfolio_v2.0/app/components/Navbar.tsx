
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ToggleDemo } from './Toggle_Demo';
export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>

            <nav className="  bg-[var(--color-primary)] text-[var(--color-text-primary)] p-4 flex justify-between items-center relative z-70 border-b-[1px] border-b-gray-600 border-[var(--color-muted)] md:px-10 lg:px-20 ">
                {!open && <ToggleDemo className=" bg-transparent absolute right-5 top-20  z-1" />}

                <h1 className="light:text-black  font-bold lg:text-2xl">0x0Miyamoto</h1>

                <ul className="hidden md:flex space-x-6 ">
                    <li><a href="/" className="inline-block transform transition-transform duration-300 hover:text-white md:text-md lg:text-2xl light:hover:text-[var(--color-muted)] light:hover:scale-125">Home</a></li>
                    <li><a href="#about" className="inline-block transform transition-transform duration-300 hover:text-white md:text-md lg:text-2xl light:hover:text-[var(--color-muted)] light:hover:scale-125">About</a></li>
                    <li><a href="#Projects" className="inline-block transform transition-transform duration-300 hover:text-white md:text-md lg:text-2xl light:hover:text-[var(--color-muted)] light:hover:scale-125">Projects</a></li>
                    <li><a href="#Experiences" className="inline-block transform transition-transform duration-300 hover:text-white md:text-md lg:text-2xl light:hover:text-[var(--color-muted)] light:hover:scale-125">Experiences</a></li>
                    <li><a href="#Contact" className="inline-block transform transition-transform duration-300 hover:text-white md:text-md lg:text-2xl light:hover:text-[var(--color-muted)] light:hover:scale-125">Contact</a></li>
                </ul>


                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden transition-transform duration-300"
                >
                    {open ? <X className="w-7 h-7 text-[var(--color-text-primary)]" /> : <Menu className="w-7 h-7 text-[var(--color-text-primary))]" />}
                </button>
            </nav>


            <div
                className={`fixed   z-60 top-15 right-0 h-full w-64 bg-[var(--color-primary)] text-[var(--color-text-primary)] p-6 transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <ul className="flex flex-col space-y-6 text-lg">
                    <li><a href="/" onClick={() => setOpen(false)} className="hover:underline">Home</a></li>
                    <li><a href="#about" onClick={() => setOpen(false)} className="hover:underline">About</a></li>
                    <li><a href="#Projects" onClick={() => setOpen(false)} className="hover:underline">Projects</a></li>
                    <li><a href="#Experiences" onClick={() => setOpen(false)} className="hover:underline">Experiences</a></li>
                    <li><a href="#Contact" onClick={() => setOpen(false)} className="hover:underline">Contact</a></li>
                </ul>
            </div>


            {open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={() => setOpen(false)}
                />
            )}
        </>
    );
}
