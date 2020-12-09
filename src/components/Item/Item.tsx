import React, { useEffect } from 'react';
import { ICustomObject } from '../../models';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Item.scss';
import { faCheck, faHourglassHalf, faMap, faShapes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Status from '../Status/Status';
import SettingsMenu from '../SettingsMenu/SettingsMenu';

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
                    <Status status={project.status} />
                </div>
            </div>
            <div className="settings-container">
                <Link to={`/project/${project.id}`}>
                    <button className="btn">See more</button>
                </Link>
                <div className="settings-handler-container">
                    <SettingsMenu onCard />
                </div>
            </div>
        </div>
    );
};

export default Item;