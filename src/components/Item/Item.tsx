import React from 'react';
import { ICustomObject } from '../../models';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Item.scss';
import { faDrawPolygon, faMap, faShapes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Status from '../Status/Status';
import SettingsMenu from '../SettingsMenu/SettingsMenu';

type ItemProps = {
    project: ICustomObject;
}

const Item = ({ project }: ItemProps) => (
    <Link to={`/project/${project.id}`} className='Item'>
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
                icon={project.type === 'map' ? faMap : faDrawPolygon}
                size="3x"
            />
        </div>
        <div className="info-container">
            <div className="status">
                <Status status={project.status} />
            </div>
        </div>
        <div className="settings-container">
            <button className="btn">See more</button>
            <div className="settings-handler-container">
                <SettingsMenu onCard />
            </div>
        </div>
    </Link>
);

export default Item;