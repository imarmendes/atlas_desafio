import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../css/profile.css';

export default function Profile() {
  const [profile] = useState(useSelector((state) => state.general.profile))
  const { name, avatar_url, login, email, followers, following } = profile;

  return (
    <div >
      <div >
        <img
          className="image"
          src={avatar_url}
          alt={name}
        />
      </div>
      <div >
        <div className="name">
          <p>{name}</p>
        </div>
        <div className="id">
          <p>{login}</p>
        </div>  
        <div  >
          <button className="followbtn" >Follow</button>
        </div>  
        <div >
          <a  href={`https://github.com/${login}`} className="link">
            @{login}
          </a>
        </div>      
        <div className="followInfo">
          <p>{followers} followers</p>
          <p>{following} following</p>
        </div>
        <div >
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}
