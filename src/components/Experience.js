import React from 'react';

function Experience({ jobTitle, company, role, date, responsibilities }) {
  return (
    <div className='exp-container'>
      <div className='exp-date'>
        <p>{date}</p>
      </div>
      <div className="exp-item">
        <h1 className="title-job">{company}</h1>
        <h2>{jobTitle}</h2>

        <ul>
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default Experience;