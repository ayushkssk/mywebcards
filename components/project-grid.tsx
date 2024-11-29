"use client"

import { useState, useEffect } from 'react'
import ProjectCard from './project-card'

const projects = [
  { link: "https://it4b.in", title: "IT4B.in", createdDate: "2024-11-22", hostingSite: "github" },
  { link: "ws/DLT.html", title: "DLT Authorization Portal", createdDate: "2023-10-01", hostingSite: "GitHub Pages" },
  // Add more projects here
]

export default function ProjectGrid() {
  const [filteredProjects, setFilteredProjects] = useState(projects)

  // Add filtering logic here

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProjects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  )
}

