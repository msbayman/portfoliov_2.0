export interface Project {
    id: number
    title: string
    description: string
    category: string
    technologies: string[]
    date: string
    image?: string
}

export interface Category {
    id: string
    label: string
}

export interface Education {
    school: string
    degree: string
    period: string
    location: string
    description: string
}

export interface ContactInfo {
    icon: string
    label: string
    value: string
    href?: string
}

export interface SocialLink {
    icon: string
    label: string
    href: string
}

export interface SkillCategory {
    title: string
    skills: string[]
}

export interface ExpertiseArea {
    title: string
    desc: string
} 