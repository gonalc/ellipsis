import React from 'react';
import './AddButton.scss';

const AddButton = () => {
    return (
        <div className='AddButton' onClick={() => alert('This will let you add a new project')}>
           + 
        </div>
    );
};

export default AddButton;