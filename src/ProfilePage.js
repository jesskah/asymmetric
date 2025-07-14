import React from "react";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";

function ProfilePage() {
  // This will be our profile data
  const profile = {
    name: "Jess Lee",
    title: "Chief Product Officer and Partner @ Sequoia Capital",
    company: "Sequoia Capital",
    location: "San Francisco Bay Area",
    connections: 500,
    about: "Love building",
    linkedin: "https://www.linkedin.com/in/jess-lee-4567890123/",
    experience: [
      {
        company: "Sequoia Capital",
        title: "Chief Product Officer and Partner",
        location: "San Francisco Bay Area",
      },
      {
        company: "Polyvore",
        title: "Co-Founder & CEO",
        location: "Mountain View, CA",
      },
      {
        company: "Google Maps",
        title: "Product Manager",
        location: "Mountain View, CA",
      },
    ],
    education: [
        {
            school: "Stanford University",
            degree: "B.S. in Computer Science",
            location: "Stanford, CA",
        },
        {
            school: "Hong Kong International School",
            degree: "High School Diploma",
            location: "Hong Kong",
        }
    ]
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-photo">
          <div className="photo-placeholder">JL</div>
        </div>
        <div className="profile-info">
          <h1>{profile.name}</h1>
          <div>{profile.title}</div>
          <div>{profile.location}</div>
          <div>{profile.connections}+ connections</div>
          <button className="connect-btn">Connect</button>
        </div>
      </div>
      <div className="experience-section profile-section">
        <h3>Experience</h3>
        {profile.experience.map((job, index) => (
            <ExperienceCard
                key={index}
                title={job.title}
                company={job.company}   
                location={job.location}
            />
          ))}
      </div>
      <div className="education-section profile-section">
        <h3>Education</h3>
        {profile.education.map((edu, index) => (
            <EducationCard
                key={index}
                school={edu.school}
                degree={edu.degree}
                location={edu.location}
            />
        ))}
      </div>
</div>
  );
}

export default ProfilePage;
