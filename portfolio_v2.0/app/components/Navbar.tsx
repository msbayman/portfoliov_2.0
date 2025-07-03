
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // install with: npm i lucide-react
import { ToggleDemo } from './Toggle_Demo'; // Adjust the import path as necessary
export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* NAVBAR */}
            <nav className="bg-[var(--color-primary)] text-[var(--color-text-primary)] p-4 flex justify-between items-center relative z-50 border-b-[1px] border-b-gray-600 border-[var(--color-muted)] md:px-10 lg:px-20 ">
                <ToggleDemo className="absolute right-5 top-20"  />

                <h1 className="font-bold lg:text-2xl">0x0Miyamoto</h1>
                {/* Desktop Nav */}
                <ul className="hidden md:flex space-x-6 ">
                    <li><a href="/" className="hover:text-white md:text-md lg:text-2xl">Home</a></li>
                    <li><a href="#about" className="hover:text-white md:text-md lg:text-2xl">About</a></li>
                    <li><a href="#Projects" className="hover:text-white md:text-md lg:text-2xl">Projects</a></li>
                    <li><a href="#Experiences" className="hover:text-white md:text-md lg:text-2xl">Experiences</a></li>
                    <li><a href="#Contact" className="hover:text-white md:text-md lg:text-2xl">Contact</a></li>
                </ul>

                {/* Hamburger Button (Mobile) */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden transition-transform duration-300"
                >
                    {open ? <X className="w-7 h-7 text-[var(--color-text-primary)]" /> : <Menu className="w-7 h-7 text-[var(--color-text-primary))]" />}
                </button>
            </nav>

            {/* SLIDE-IN SIDEBAR */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-[var(--color-primary)] text-[var(--color-text-primary)] p-6 transform transition-transform duration-300 ease-in-out z-40 ${open ? 'translate-x-0' : 'translate-x-full'
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

            {/* BACKDROP (click to close) */}
            {open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={() => setOpen(false)}
                />
            )}
        </>
    );
}
