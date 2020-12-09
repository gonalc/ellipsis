import { faCheck, faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Status.scss';

type StatusProps = {
    status: 'uploaded' | 'in-progress';
}

const Status = ({ status }: StatusProps) => {
    return (
        <div className='Status'>
            <div className={`icon ${status}`}>
                <FontAwesomeIcon icon={status === 'uploaded' ? faCheck : faHourglassHalf} />
            </div>
            <p className="status-text text-normal">{status === 'uploaded' ? 'Uploaded' : 'In progress'}</p>
        </div>
    );
};

export default Status;