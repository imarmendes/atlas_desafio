import React from 'react';
import { ExternalLink } from 'react-external-link';

export default function RepositoryCard(props) {  
  const { name, full_name, updated_at, forks_count, license, language, description } = props.repository
  
  return (
    <div className="">      
      <ExternalLink href={`https://github.com/${full_name}`} >
        { name }
      </ExternalLink>
      <div className="">
          {description && <p>{description}</p>}
      </div>
      <div className="">       
        <div className="">
            {language && <p>{language}</p>}
        </div>
        <div className="">
            {forks_count && <p>{forks_count}</p>}
        </div>
        <div className="">
            {license && <p>{license.name}</p>}
        </div>
        <div className="">
            {updated_at && <p>{updated_at}</p>}
        </div>
      </div>
    </div>
  );
}
