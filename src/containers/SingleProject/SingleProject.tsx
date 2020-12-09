import React, { useEffect, useState, useRef } from 'react';
import { faHeart, faMap, faShapes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RouteChildrenProps, withRouter } from 'react-router-dom';
import Status from '../../components/Status/Status';
import { db, users } from '../../data';
import { ICustomObject, IUser } from '../../models';
import './SingleProject.scss';
import moment from 'moment';
import SettingsMenu from '../../components/SettingsMenu/SettingsMenu';

const SingleProject = ({ match }: RouteChildrenProps) => {
    const { project_id }: any = match!.params;
    const myId: number = Number(localStorage.getItem('user_id'));
    const map = useRef<HTMLDivElement>(null);
    const [project, setProject] = useState<ICustomObject>();
    const [coords, setCoords] = useState<[number, number]>([0, 0]); // [X, Y]
    const [owner, setOwner] = useState<IUser>();
    const [isFav, setIsFav] = useState<boolean>(false);

    useEffect(() => {
        if (project_id) {
            const foundProject = db.find((p) => p.id === Number(project_id));
            const foundOwner = users.find((user) => user.id === foundProject!.owner);
            setOwner(foundOwner);
            setProject(foundProject);
        }
    }, []);

    useEffect(() => {
        // Check if it is in my favs
        const myFavs = users.find((u) => u.id === myId)?.favorites || [];
        setIsFav(myFavs.indexOf(Number(project_id)) >= 0);
    }, []);

    useEffect(() => {
        if (map!.current && project) {
            // Get map dimensions
            const { clientHeight, clientWidth } = map.current;
            // Set pin location in the map depending on dimensions
            // Axis 0  is in the middle, so negative coords can be displayed
            // In a real map, these will be the real coordinates
            const x = ((clientWidth / 2) * project.position[0] / 100) + (clientWidth / 2);
            // Height goes in the opposite direction, so the greater numbers are on top
            const y = ((clientHeight / 2) * -project.position[1] / 100) + (clientHeight / 2);
            setCoords([x, y]);
        }
    }, [map, project]);

    if (!project) return <p>Loading...</p>;
    return (
        <div className='SingleProject'>
            <SettingsMenu />
            <div className="title-container">
                <h1>{project.name} <span className="vertical-separator">|</span> <span className="project-type light">{project.type}</span></h1>
                {isFav && (
                    <div className="fav-container">
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                )}
            </div>
            <div className="status-container">
                <Status status={project.status} />
            </div>

            <div ref={map} className="map-container">
                <div style={{
                    left: coords[0],
                    top: coords[1],
                }}
                    className="pin-container"
                    title={`Position: [${project.position[0]}, ${project.position[1]}]`}
                >
                    <FontAwesomeIcon
                        icon={project.type === 'map' ? faMap : faShapes}
                        size="2x"
                    />
                </div>
                <img src="/img/map.png" alt="Placeholder map of Madrid" />
            </div>
            <div className="bottom-container">
                <div className="creation-container">
                    <p className='bold'>Created by:</p>
                    {owner && (
                        <div className="owner-container">
                            <div className="avatar">
                                <img src={owner.avatar} alt={owner.name} />
                            </div>
                            <div className="text-container">
                                <h3 className='name'>{myId === owner.id ? 'Me' : owner.name}</h3>
                                <p>
                                    <span className="orange colored">
                                        Created at:&nbsp;
                                </span>
                                    <span className="bold blue-gray colored">
                                        {moment(project.creationDate).format('DD/MM/YYYY HH:mm')}
                                    </span>
                                </p>
                                <p>
                                    <span className="orange colored">
                                        Last edition:&nbsp;
                                </span>
                                    <span className="bold blue-gray colored">
                                        {moment(project.lastEditDate).format('DD/MM/YYYY HH:mm')}
                                    </span>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default withRouter(SingleProject);