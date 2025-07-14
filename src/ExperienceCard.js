import React from 'react';

function ExperienceCard(job) {
  return (
    <div className="job">
      <div>{job.title}</div>
      <div>{job.company}</div>
      <div>{job.location}</div>
    </div>
  );
}

export default ExperienceCard;
