'use client'

import React, { useState } from 'react'
import ProjectTag from '../components/Proj/ProjectTag';
import ProjectCard from '../components/Proj/ProjectCard';

function Projects() {

    const projectsData = [
        {
          id: 1,
          title: "React Portfolio Website",
          description: "Project 1 description",
          image: "../images/ProjectsImg/proj1.png",
          tag: ["All", "Web"],
          gitUrl: "/",
          previewUrl: "/",
        },
        {
          id: 2,
          title: "Potography Portfolio Website",
          description: "Project 2 description",
          image: "../images/ProjectsImg/proj2.png",
          tag: ["All", "Web"],
          gitUrl: "/",
          previewUrl: "/",
        },
        {
          id: 3,
          title: "E-commerce Application",
          description: "Project 3 description",
          image: "../images/ProjectsImg/proj3.jpg",
          tag: ["All", "Web"],
          gitUrl: "/",
          previewUrl: "/",
        },
        {
          id: 4,
          title: "Food Ordering Application",
          description: "Project 4 description",
          image: "../images/ProjectsImg/proj4.png",
          tag: ["All", "Mobile"],
          gitUrl: "/",
          previewUrl: "/",
        },
        {
          id: 5,
          title: "React Firebase Template",
          description: "Authentication and CRUD operations",
          image: "../images/ProjectsImg/proj5.jpg",
          tag: ["All", "Web"],
          gitUrl: "/",
          previewUrl: "/",
        },
        {
          id: 6,
          title: "Full-stack Roadmap",
          description: "Project 5 description",
          image: "../images/ProjectsImg/proj6.png",
          tag: ["All", "Web"],
          gitUrl: "/",
          previewUrl: "/",
        },
    ];  

    const [tag, setTag] = useState("All");
  
    const handleTagChange = (newTag) => {
      setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );
  

  return (
    <main className="flex min-h-screen flex-col">
    <div className="container mt-24 mx-auto px-12 py-4">

    <div>
{/*         <div className="flex flex-row justify-center item-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        </div> */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => 
            <ProjectCard
              key={project.id}
              Pid={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
        )}
        </div>
    </div>

    </div>
    </main>
  )
}

export default Projects