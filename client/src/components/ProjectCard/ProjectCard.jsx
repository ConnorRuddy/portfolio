import React, {useState} from 'react'
import './ProjectCard.css'

const ProjectCard = ({project: {title, imageSrc, description, skills, demo, source}}) => {
  
  const [showDetails, setShowDetails] = useState(false);
 
  const openDetails= () => {
    setShowDetails(true)
  };

  const closeDetails= () => {
    setShowDetails(false)
  };

  return (
    <div className="card-container">
      {!showDetails ? (
      <div className='card-before'>
         <img src={`../projectimg/${imageSrc}`} className="card-img"/>
         <h4 className="card-title" onClick={openDetails}>{title}</h4>
         </div>
      ) : (
       
        <div className="card-text">
            <p className="card-description">{description}</p>
            <p className="skill-title">Skills Utilized</p>
            <ul className="card-list">{
              skills.map((skill, id) => {
                return(
                  
              <li  className="card-list-item" key={id}>{skill}</li>);
              })}
            </ul>
            <div className="card-button-container">
              <a href={demo} className="card-button">Source Code</a>
              <h4 onClick={closeDetails} className="close">X</h4>
              </div>
            </div>
      )}
      </div>
  );
}

export default ProjectCard
