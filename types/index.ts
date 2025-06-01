export interface User {
  id: string
  email: string
  firstName?: string
  lastName?: string
  imageUrl?: string
}

export interface Portfolio {
  id?: string
  user_id: string
  slug: string
  name: string
  bio: string
  skills: string[]
  projects: Project[]
  contact: Contact
  theme: string
  isPublic: boolean
  created_at?: string
  updated_at?: string
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  imageUrl?: string
}

export interface Contact {
  email: string
  phone?: string
  linkedin?: string
  github?: string
  website?: string
  location?: string
}

export interface Theme {
  id: string
  name: string
  preview: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
  }
}
