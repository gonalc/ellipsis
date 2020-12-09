import { faCog, faEdit, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Transition } from 'react-transition-group';
import React, { useState } from 'react';
import './SettingsMenu.scss';

type States = 'entering' | 'entered' | 'exiting' | 'exited';

const SettingsMenu = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const duration = 300;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    }

    const transitionStyles = {
        entering: { opacity: 0 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
    };

    return (
        <div className='SettingsMenu'>
            <div className="icon-container" onClick={() => setShowMenu(!showMenu)}>
                <FontAwesomeIcon style={{
                    transform: `rotate(${showMenu ? '90deg' : '0'})`,
                }} icon={faCog} />
            </div>
            <Transition in={showMenu} timeout={duration} mountOnEnter unmountOnExit>
                {(state: States) => (
                    <div
                        className="menu-container"
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state],
                        }}
                    >
                        <ul>
                            <li onClick={() => alert('This would add this project to your favorites')}>
                                <FontAwesomeIcon icon={faHeart} />
                                Add to Favorites
                            </li>
                            <li onClick={() => alert('This will let you edit the project\'s name')}>
                                <FontAwesomeIcon icon={faEdit} />
                                Edit name
                            </li>
                            <li onClick={() => alert('This will let you share this project with somebody else')}>
                                <FontAwesomeIcon icon={faShare} />
                                Share with somebody
                            </li>
                        </ul>
                    </div>
                )}
            </Transition>
        </div>
    );
};

export default SettingsMenu;