import React from 'react';
import { formatJobDuration, calculateDuration } from './dateUtils';

function ExperienceCard({ title, company, location, startDate, endDate, description }) {
  return (
    <div className="job">
      <h3>{company}</h3>
      <div>{title}</div>
      <div className="job-duration">
        {formatJobDuration(startDate, endDate)} · {calculateDuration(startDate, endDate)}
      </div>
      <div className="job-location">{location}</div>
      <p className="job-description">{description}</p>
    </div>
  );
}

export default ExperienceCard;
