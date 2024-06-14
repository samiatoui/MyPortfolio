import React from 'react';
import Experience from './Experience'; // Import the Experience component

export default function Workexp() {
  const workExperiences = [
    {
      jobTitle: 'Lead Developer/Product Owner',
      company: 'Public Health Agency of Canada, Data Enablement',
      date: 'September 2023 - Current',
      responsibilities: [
        'Spearhead development and deployment of innovative software solutions for government agencies.',
        'Collaborate with stakeholders to define product vision, goals, and feature prioritization.',
        'Orchestrate design, development, and delivery of tailored solutions, ensuring alignment with agency objectives.',
        'Conduct user research and usability testing to optimize product usability and efficiency.',
        'Facilitate cross-functional collaboration and champion Agile methodologies for continuous improvement.',
        'Monitor key metrics to drive data-driven decision-making and prioritize enhancements.',
        'Lead product launch activities and cultivate strategic partnerships with government departments.',
        'Ensure compliance with government regulations and integrate user feedback into development processes.',
      ]
    },
    {
      jobTitle: 'Student Media Coordinator',
      company: 'Association Étudiante de l’Université de Saint-Boniface',
      date: 'August 2018 - Current',
      responsibilities: [
        'Directed day-to-day operations of Le Réveil and Le Réveil FM, ensuring the delivery of high-quality content to the student body and french community.',
        'Conducted comprehensive hiring processes to recruit top talent, fostering innovation within our media platforms.',
        'Implemented strategic sales strategies for advertisement slots, driving revenue generation and ensuring financial sustainability.',
        'Managed social media accounts to enhance online presence and foster meaningful connections with our audience.',
        'Designed and maintained the organizations website using WordPress, optimizing user experience and accessibility.'
      ],
    },
    {
        jobTitle: 'Software Developer',
        company: 'Public Health Agency of Canada, Data Enablement',
        date: 'February 2022 - September 2023',
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
        'Proactively identified opportunities for process improvement and digital transformation, proposing and implementing innovative solutions to address organizational needs.',
        'Participated in Agile ceremonies including sprint planning, backlog grooming, and daily stand-ups, contributing to the rapid iteration and delivery of software solutions.',
        'Contributed to front-end development efforts, leveraging Vue.js and React to create intuitive user interfaces with a focus on usability and responsiveness.',
        'Implemented back-end functionality using Django and ASP.NET, developing RESTful APIs and integrating with databases to support critical workflows and data management processes.',
        'Engaged in product management activities, collaborating with stakeholders to prioritize features, plan roadmaps, and conduct user acceptance testing to ensure solutions met user requirements.',
        'Utilized version control tools such as GitHub to manage code repositories, ensuring code quality, versioning, and collaboration across development efforts.',
        'Worked closely with cross-functional teams including designers, testers, and business analysts to understand requirements, refine solutions, and deliver high-quality software products.'
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
