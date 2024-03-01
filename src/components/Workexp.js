import React from 'react';
import Experience from './Experience'; // Import the Experience component

export default function Workexp() {
  const workExperiences = [
    {
        jobTitle: 'Software Developer',
        company: 'Public Health Agency of Canada, Data Enablement',
        date: 'February 2022 - Current',
        responsibilities: [
          'Thrived in an AGILE environment, effectively collaborating with cross-functional teams.',
          'Proficiently developed and maintained code using a variety of programming languages, including React JS, Vue JS, and incorporated specialized technologies like ArangoDB and GraphQL.',
          'Leveraged the Google Cloud Platform, employing technologies like Docker, Cloud SQL, and Cloud Run.',
          'Developed and maintained a security control filtering application using React for Front‑End and GraphQL + ArangoDB for Back‑End, used by managers and higher‑ups',
          'Authored numerous wiki documents that served as essential resources for a wide range of developers.',
          ' Actively contributed to the initiation of the framework and infrastructure, engaging in meetings with Google Representatives to gain insights into the Google Cloud Application Framework (GCAF)',
        ],
      },
    {
      jobTitle: 'Software Developer',
      company: 'Department of National Defence, Government of Canada',
      date: 'August 2021 - Current',
      responsibilities: [
        'Wrote and maintained code for a web application used by 15,000 employees.',
        'Worked with a variety of technologies and languages such as JavaScript, VueJS, Firebase, ASP.Net Core, Django, Postgres, and Nativescript.',
        'Wrote and maintained essential documentation used by the development team.',
        'Communicated with multi-disciplinary teams of engineers and designers on a daily basis.',
      ],
    },
    {
      jobTitle: 'Front-End Developer',
      company: 'Mondo Marketing',
      date: 'May 2021 - August 2021',
      responsibilities: [
        'Created responsive websites for clients including e-commerce.',
        'Worked with various technologies such as HTML, CSS, JavaScript, Wordpress, and Shopify.',
        'Worked on PPC social media campaigns on Facebook and Instagram for clients.',
        'In direct communication with clients on a daily basis.',
      ],
    },
    {
      jobTitle: 'Student Media Coordinator',
      company: 'Association Étudiante de l’Université de Saint-Boniface',
      date: 'August 2018 - Current',
      responsibilities: [
        'Managed and hired a team of 20 employees.',
        'Overlooked the daily operations of the student media.',
        'Sold advertisement spaces on the newspaper and radio.',
        'Managed the media websites and social media accounts.',
      ],
    },
  ];

  return (
    <div className="exp-main">
      <h1 className="work-title">Where I've Worked</h1>
      <div className="work-exp">
        {workExperiences.map((experience, index) => (
          <Experience
            key={index}
            jobTitle={experience.jobTitle}
            company={experience.company}
            date={experience.date}
            responsibilities={experience.responsibilities}
          />
        ))}
      </div>
    </div>
  );
}
