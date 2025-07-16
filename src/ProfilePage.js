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
        startDate: "2016-11-01",
        endDate: null, // null = current job
        description: "Early Stage Partner leading Arc (pre-seed/seed program), Scouts (angel program), and Ecosystem Fund. Oversee engineering, product, design, and data science teams. Board member at Ironclad, Maven Clinic, Freed, Captions, and others."
      },
      {
        company: "All Raise",
        title: "Co-founder & Janitor",
        location: "San Francisco Bay Area",
        startDate: "2017-10-01",
        endDate: null, // Still active
        description: "Co-founded non-profit dedicated to diversity in tech, improving representation of women founders and funders. Co-captain Female Founder Office Hours program."
      },
      {
        company: "Polyvore",
        title: "Co-Founder & CEO", 
        location: "Mountain View, CA",
        startDate: "2008-03-01",
        endDate: "2016-11-01",
        description: "Started as a user who complained about the product, became first PM, then CEO. Built shopping platform with 20M+ users. Acquired by Yahoo for $230M."
      },
      {
        company: "Yahoo",
        title: "VP Product, Lifestyle",
        location: "Mountain View, CA",
        startDate: "2015-09-01",
        endDate: "2016-11-01",
        description: "Led Yahoo Lifestyle team post-Polyvore acquisition. Product portfolio included Polyvore, Product Ads, Yahoo View, and stealth projects."
      },
      {
        company: "Google",
        title: "Product Manager, Google Maps",
        location: "Mountain View, CA",
        startDate: "2006-08-01",
        endDate: "2008-03-01",
        description: "Launched major Google Maps features including My Maps, draggable directions, real-time traffic, and multipoint routing. Coordinated across 13 global offices."
      },
    ],
    education: [
        {
            school: "Stanford University",
            degree: "B.S. in Computer Science",
            location: "Stanford, CA",
            startDate: "2000-09-01",
            endDate: "2004-06-01"
        },
        {
            school: "Hong Kong International School",
            degree: "High School Diploma",
            location: "Hong Kong",
            startDate: "1996-09-01",
            endDate: "2000-06-01"
        }
    ]
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-text">
          <h1 className="profile-name">{profile.name}</h1>
          <div className="profile-title">{profile.title}</div>
          <div className="profile-details">
            <div className="profile-location">{profile.location}</div>
            <div className="profile-connections">{profile.connections}+ connections</div>
          </div>
          <button className="connect-btn">Connect</button>
        </div>
        <div className="profile-photo">
          <img 
            src="https://www.sequoiacap.com/wp-content/uploads/sites/6/2021/11/Jess-Lee-index-2.jpg?resize=880,880" 
            alt="Jess Lee"
            className="profile-image"
          />
        </div>
      </div>
      <hr></hr>
      <div className="experience-section profile-section">
        <h2>Experience</h2>
        {profile.experience.map((job, index) => (
            <ExperienceCard
                key={index}
                title={job.title}
                company={job.company}   
                location={job.location}
                startDate={job.startDate}
                endDate={job.endDate}
                description={job.description}
            />
          ))}
      </div>
      <div className="education-section profile-section">
        <h2>Education</h2>
        {profile.education.map((edu, index) => (
            <EducationCard
                key={index}
                school={edu.school}
                degree={edu.degree}
                location={edu.location}
                startDate={edu.startDate}
                endDate={edu.endDate}
            />
        ))}
      </div>
</div>
  );
}

export default ProfilePage;
