import React from 'react';

function EducationCard(edu) {
    return (
        <div className="education">
            <div>{edu.school}</div>
            <div>{edu.degree}</div>
            <div>{edu.location}</div>
        </div>
    )
}

export default EducationCard;