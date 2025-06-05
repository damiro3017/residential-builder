import React from 'react'
import Project01 from "../assets/images/project_01.webp"
import Project02 from "../assets/images/project_02.webp"
import Project03 from "../assets/images/project_03.webp"
import Project04 from "../assets/images/project_04.webp"
import Project05 from "../assets/images/project_05.webp"

export const OurProjectsGrid = () => {
    const projects = [
        { img: Project01, title: "Proyecto 1", span: "col-span-5" },
        { img: Project02, title: "Proyecto 2", span: "col-span-4" },
        { img: Project03, title: "Proyecto 3", span: "col-span-2" },
        { img: Project04, title: "Proyecto 4", span: "col-span-4" },
        { img: Project05, title: "Proyecto 5", span: "col-span-3" }
    ];

    return (
        <div className='grid grid-cols-9 grid-rows-2 place-items-stretch gap-6 max-h-[500px] mt-8'>
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={`${project.span} w-full h-full relative group overflow-hidden`}
                >
                    <img
                        src={project.img}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-mineshaft bg-opacity-0 cursor-pointer group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                        <h3 className="text-white text-3xl
                        opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-bold">
                            {project.title}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
    );
}