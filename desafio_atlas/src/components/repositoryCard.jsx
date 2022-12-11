import React from 'react';
import '../css/repositoryCard.css';

export default function RepositoryCard(props) {  
  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"]
  const { name, full_name, updated_at, forks_count, license, language, description } = props.repository
  const date = new Date(Date.parse(updated_at))
  const day = date.getDay()
  const month = date.getMonth()
  return (
    <div className="card">      
      <div className="title">      
        <a href={`https://github.com/${full_name}`}  className="title">
          { name }
        </a>
      </div>
      <div className="description">
          {description && <p>{description}</p>}
      </div>
      <div className="base">       
        <div className="">
            {language && <p>{language}</p>}
        </div>
        <div className="">
            {forks_count !== 0 && <p>{forks_count}</p>}
        </div>
        <div className="">
            {license && <p>{license.name}</p>}
        </div>
        <div className="">
            {updated_at && <p>Updated on {day + 1} {months[month]}</p>}
        </div>
      </div>
    </div>
  );
}
