export const skills = [
    "TypeScript",
    "Tailwind",
    "Django",
    "Git",
    "NextJs",
    "Redux",
    "SQL",
    "C++",
    "ReactJs",
    "RESTful APIs",
    "Docker",
    "C",
    "Material UI",
    "Python",
    "Shell",
]

export const projects = [
    // Systems & Low-Level Programming
    {
        id: 1,
        title: "Libft",
        description:
            "Recreation of essential C standard library functions. This foundational project involved implementing string manipulation, memory management, and utility functions that serve as building blocks for all subsequent projects.",
        category: "lowlevel",
        technologies: ["C", "Makefile", "Memory Management"],
        date: "Nov 2022",
        image: "/projects_images/libft.png"
    },
    {
        id: 2,
        title: "get_next_line",
        description:
            "Implementation of a function that reads content line by line from files, stdin, or network connections. Essential for file processing and will be reused throughout the curriculum.",
        category: "lowlevel",
        technologies: ["C", "File I/O", "Buffer Management"],
        date: "Nov 2022",
        image: "/projects_images/get_next_line.webp"
    },
    {
        id: 3,
        title: "ft_printf",
        description:
            "Complete recreation of the printf function with variadic functions implementation. Handles multiple format specifiers and provides formatted output functionality.",
        category: "lowlevel",
        technologies: ["C", "Variadic Functions", "String Formatting"],
        date: "Nov 2022",
        image: "/projects_images/ft_printf.png"
    },
    {
        id: 4,
        title: "push_swap",
        description:
            "Advanced sorting algorithm implementation using two stacks with a limited set of operations. Optimizes for the minimum number of moves to sort data efficiently.",
        category: "algorithms",
        technologies: ["C", "Sorting Algorithms", "Stack Operations", "Optimization"],
        date: "Jan 2023",
        image: "/projects_images/push_swap.gif"
    },
    {
        id: 5,
        title: "minishell",
        description:
            "Implementation of a fully functional Unix shell with command parsing, execution, built-in commands, pipes, redirections, and environment variable handling.",
        category: "lowlevel",
        technologies: ["C", "Unix System Calls", "Process Management", "Parsing"],
        date: "Jun 2023",
        image: "/projects_images/minishell.png"
    },
    {
        id: 6,
        title: "Philosophers",
        description:
            "Multithreading project simulating the dining philosophers problem. Focuses on concurrent programming, mutex handling, and deadlock prevention.",
        category: "lowlevel",
        technologies: ["C", "Multithreading", "Mutex", "Concurrent Programming"],
        date: "Jun 2023",
        image: "/projects_images/philo.jpg"
    },
    {
        id: 7,
        title: "pipex",
        description:
            "Implementation of Unix pipes and redirections, simulating shell pipe behavior. Deepens understanding of process communication and file descriptor management.",
        category: "lowlevel",
        technologies: ["C", "Unix Pipes", "Process Communication", "File Descriptors"],
        date: "Feb 2023",
        image: "/projects_images/pipex.gif"
    },

    // Graphics & Game Development
    {
        id: 8,
        title: "so_long",
        description:
            "2D game development using minilibx graphics library. Features sprite animation, texture mapping, and basic game mechanics with player movement and collectibles.",
        category: "graphics",
        technologies: ["C", "MinilibX", "2D Graphics", "Game Logic"],
        date: "Jan 2023",
        image: "/projects_images/so_long.gif"
    },
    {
        id: 9,
        title: "cub3d",
        description:
            "3D raycasting engine inspired by Wolfenstein 3D. Implements ray-casting algorithms to create a dynamic first-person perspective view inside a maze environment.",
        category: "graphics",
        technologies: ["C", "Raycasting", "3D Graphics", "MinilibX", "Mathematics"],
        date: "Oct 2023",
        image: "/projects_images/cub3d.jpg"
    },

    // DevOps & System Administration
    {
        id: 10,
        title: "Born2beroot",
        description:
            "System administration project involving Linux server setup, security configuration, user management, and service installation including web servers, DNS, and mail services.",
        category: "devops",
        technologies: ["Linux", "System Administration", "Security", "Virtualization"],
        date: "Dec 2022",
        image: "/projects_images/born2beroot.webp"
    },
    {
        id: 11,
        title: "NetPractice",
        description:
            "Comprehensive networking exercise covering IP addressing, subnetting, routing, and network configuration. Practical approach to understanding network fundamentals.",
        category: "devops",
        technologies: ["Networking", "TCP/IP", "Subnetting", "Routing"],
        date: "Jul 2023",
        image: "/projects_images/net_practice.png"
    },
    {
        id: 12,
        title: "Inception",
        description:
            "Advanced Docker containerization project creating a complete web server environment with Nginx, WordPress, and MariaDB containers. Each service runs in isolation for enhanced security and scalability.",
        category: "devops",
        technologies: ["Docker", "Docker Compose", "Nginx", "WordPress", "MariaDB"],
        date: "Feb 2024",
        image: "/projects_images/Docker_pic.png"
    },

    // Object-Oriented Programming
    {
        id: 13,
        title: "CPP Modules",
        description:
            "Comprehensive C++ learning path covering OOP principles, memory management, inheritance, polymorphism, templates, STL containers, and advanced C++ features through 10 progressive modules.",
        category: "oop",
        technologies: ["C++", "OOP", "Templates", "STL", "Memory Management"],
        date: "Oct 2023 - Jan 2024",
        image: "/projects_images/c++.webp"
    },

    // Networking & Systems
    {
        id: 14,
        title: "ft_irc",
        description:
            "Complete IRC (Internet Relay Chat) server implementation in C++. Fully compatible with official IRC clients, supporting multiple channels, user authentication, and real-time messaging.",
        category: "networking",
        technologies: ["C++", "Socket Programming", "IRC Protocol", "Network Programming"],
        date: "Mar 2024",
        image: "/projects_images/IRC.jpg"
    },

    // Full-Stack Web Development
    {
        id: 15,
        title: "ft_transcendence",
        description:
            "Advanced full-stack web application featuring a multiplayer Pong game with real-time chat, user authentication (OAuth), matchmaking system, and comprehensive user management. Demonstrates modern web development practices.",
        category: "fullstack",
        technologies: ["TypeScript", "React", "Django", "WebSocket", "OAuth", "PostgreSQL"],
        date: "Mar 2025",
        image: "/projects_images/ft_rans.jpg"
    },
]

export const categories = [
    { id: "all", label: "All Projects" },
    { id: "lowlevel", label: "Systems & Low-Level" },
    { id: "devops", label: "DevOps & Infrastructure" },
    { id: "fullstack", label: "Full-Stack Web" },
    { id: "graphics", label: "Graphics & Games" },
    { id: "networking", label: "Networking" },
    { id: "algorithms", label: "Algorithms" },
    { id: "oop", label: "Object-Oriented" },
]

export const education = [
    {
        school: "1337 Coding School",
        degree: "Computer Architect",
        period: "2022 - Present",
        location: "Khouribga, Morocco",
        description:
            "Intensive coding program focusing on low-level programming, algorithms, and system architecture. Developing strong problem-solving skills through peer-to-peer learning and project-based curriculum.",
    },
    {
        school: "ISTA Khouribga",
        degree: "IT Development",
        period: "2019 - 2021",
        location: "Khouribga, Morocco",
        description:
            "Comprehensive program covering software development fundamentals, database management, and web technologies. Built a solid foundation in programming principles and software engineering practices.",
    },
]

export const contactInfo = [
    {
        icon: "Mail",
        label: "Email",
        value: "msaoubayman@gmail.com",
        href: "mailto:msaoubayman@gmail.com",
    },
    {
        icon: "Phone",
        label: "Phone",
        value: "+212707926332",
        href: "tel:+212707926332"
    },
    {
        icon: "MapPin",
        label: "Location",
        value: "Khouribga, Morocco"
    },
]

export const socialLinks = [
    { icon: "Github", label: "GitHub Profile", href: "https://www.github.com/msbayman" },
    { icon: "Linkedin", label: "LinkedIn Profile", href: "https://www.linkedin.com/in/ayman-msaoub/" },
]

export const skillCategories = [
    { title: "Frontend", skills: ["ReactJs", "NextJs", "TypeScript", "Tailwind", "Material UI", "Redux"] },
    { title: "Backend", skills: ["Django", "Python", "RESTful APIs", "SQL"] },
    { title: "DevOps & Tools", skills: ["Docker", "Git", "Shell", "C", "C++"] },
]

export const expertiseAreas = [
    { title: "Systems Programming", desc: "C/C++, Unix, Multithreading" },
    { title: "DevOps & Infrastructure", desc: "Docker, Linux, Networking" },
    // { title: "Graphics & Games", desc: "3D Raycasting, 2D Games" },
    { title: "Full-Stack Web", desc: "React, Django, WebSocket" },
] 