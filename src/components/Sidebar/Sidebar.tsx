import { faFolder, faStar, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useScreenSize from '../../hooks/screen-size';
import './Sidebar.scss';

type SidebarProps = {
    avatar: string;
    name: string;
}

const Sidebar = ({ avatar, name }: SidebarProps) => {
    const [show, setShow] = useState<boolean>(false);
    const { isMobile } = useScreenSize();
    return (
        <>
            { isMobile && (
                <div className={`burger-menu ${show ? 'on' : 'off'}`} onClick={() => setShow(!show)}>
                    <div className="bar top" />
                    <div className="bar middle" />
                    <div className="bar bottom" />
                </div>
            )}
            <div className={`Sidebar ${isMobile ? 'mobile' : ''} ${show ? 'on' : 'off'}`}>
                <h1 className="text-center">
                    <NavLink to='/'>Ellipsis</NavLink>
                </h1>
                <div className="avatar-container">
                    <img src={avatar} alt={name} title={name} />
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to='/projects/my-projects'
                                className='nav-link'
                                activeClassName='active'
                                onClick={() => setShow(false)}
                            >
                                <div className="icon-container">
                                    <FontAwesomeIcon icon={faFolder} />
                                </div>
                                My Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/projects/shared-with-me'
                                className='nav-link'
                                activeClassName='active'
                                onClick={() => setShow(false)}
                            >
                                <div className="icon-container">
                                    <FontAwesomeIcon icon={faUserFriends} />
                                </div>
                                Shared with me
                        </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/projects/favorites'
                                className='nav-link'
                                activeClassName='active'
                                onClick={() => setShow(false)}
                            >
                                <div className="icon-container">
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                Favorites
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;