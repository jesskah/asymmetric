import React from 'react';
import { formatJobDuration, calculateDuration } from './dateUtils';

function EducationCard({ school, degree, location, startDate, endDate }) {
    return (
        <div className="education">
            <h3>{school}</h3>
            <div>{degree}</div>
            <div className="job-duration">
                {formatJobDuration(startDate, endDate)} · {calculateDuration(startDate, endDate)}
            </div>
            <div className="job-location">{location}</div>
        </div>
    )
}

export default EducationCard;