import React, { useState } from 'react';
import { ExternalLink } from 'react-external-link';
import { Img } from 'react-image';
import { useSelector } from 'react-redux';
import '../css/profile.css';



export default function Profile() {
  const [profile] = useState(useSelector((state) => state.general.profile))
  const { name, avatar_url, login, email, followers, following } = profile;

  return (
    <div className="">
      <div className="">
        <Img
          src={avatar_url}
          alt={name}
        />
      </div>
      <div className="">
        <div className="">
          <p>{name}</p>
        </div>
        <div className="">
          <p>{login}</p>
        </div>  
        <div className="" >
          <button>Follow</button>
        </div>  
        <div className="">
          <ExternalLink href={`https://github.com/${login}`}>
            @{login}
          </ExternalLink>
        </div>      
        <div className="">
          <p>{followers} followers</p>
          <p>{following} following</p>
        </div>
        <div className="">
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}
