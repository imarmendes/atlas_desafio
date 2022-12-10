import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import RepositoryCard from './repositoryCard';

export default function Repositories() {  
  const [repositories] = useState(useSelector((state) => state.general.repositories))
  // console.log(repositories);
  return (
    <div className="">
      <p>Repositories {repositories.length}</p>
      <div>
        {repositories.map((repository) => (
            <RepositoryCard key={ repository.name } repository={ repository } />
          ))}
      </div>
    </div>
  );
}
