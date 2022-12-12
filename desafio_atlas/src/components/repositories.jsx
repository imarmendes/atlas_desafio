import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../css/repositories.css';
import RepositoryCard from './repositoryCard';

export default function Repositories() {  
  const [repositories] = useState(useSelector((state) => state.general.repositories))

  return (
    <div className="repositories">
      <div className="repositoriesName">
        <p >Repositories {repositories.length}</p>
      </div>
      <div>
        {repositories.map((repository) => (
            <RepositoryCard key={ repository.name } repository={ repository } />
        ))}
      </div>
    </div>
  );
}
