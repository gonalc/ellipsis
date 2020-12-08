import React, { useEffect } from 'react';
import { ICustomObject } from '../../models';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Item.scss';
import { faCheck, faHourglassHalf, faMap, faShapes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

type ItemProps = {
    project: ICustomObject;
}

const Item = ({ project }: ItemProps) => {
    useEffect(() => {
        console.log({ project });
    }, []);

    return (
        <div className='Item'>
            <header>
                <h3 className={`title text-center ${project.name.length > 8 ? 'small-title' : ''}`}>
                    {project.name}
                </h3>
                <div className="type-container">
                    <p className="text-center">{project.type}</p>
                </div>
            </header>
            <div className="main-icon-container">
                <FontAwesomeIcon
                    icon={project.type === 'map' ? faMap : faShapes}
                    size="3x"
                />
            </div>
            <div className="info-container">
                <div className="status">
                    <div className="icon">
                        <FontAwesomeIcon icon={project.status === 'uploaded' ? faCheck : faHourglassHalf} />
                    </div>
                    <p className="status-text text-normal">{project.status === 'uploaded' ? 'Uploaded' : 'In progress'}</p>
                </div>
            </div>
            <div className="settings-container">
                <Link to={`/project/${project.id}`}>
                    <button className="btn">Settings</button>
                </Link>
            </div>
        </div>
    );
};

export default Item;