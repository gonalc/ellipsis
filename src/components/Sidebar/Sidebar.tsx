import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

type Route = 'my-projects' | 'shared-with-me' | 'favorites' | 'home';

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <h1 className="text-center">
                <NavLink to='/'>Ellipsis</NavLink>
            </h1>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to='my-projects'
                            className='nav-link'
                            activeClassName='active'
                        >
                                My Projects
                            </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='shared-with-me'
                            className='nav-link'
                            activeClassName='active'
                        >
                            Shared with me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='favorites'
                            className='nav-link'
                            activeClassName='active'
                        >
                                Favorites
                            </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;