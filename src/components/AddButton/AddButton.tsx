import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './AddButton.scss';

const AddButton = () => {
    return (
        <div className='AddButton' onClick={() => alert('This will let you add a new project')}>
           <FontAwesomeIcon size="xs" icon={faPlus} />
        </div>
    );
};

export default AddButton;