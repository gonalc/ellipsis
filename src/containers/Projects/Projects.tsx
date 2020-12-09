import React from 'react';
import Item from '../../components/Item/Item';
import { ICustomObject } from '../../models';
import './Projects.scss';

type ProjectsProps = {
    projects: ICustomObject[];
}

const Projects = ({ projects }: ProjectsProps) => {
    return (
        <div className='Projects'>
            {projects.map((project) => (
                <Item
                    project={project}
                    key={project.id}
                />
            ))}
        </div>
    );
};

export default Projects;