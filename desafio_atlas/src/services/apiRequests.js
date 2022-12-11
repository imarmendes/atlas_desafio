// const axios = require('axios')
import axios from 'axios';

export async function requestRopositories(userName){
  const URL = `https://api.github.com/users/${userName}/repos`;
  const response = await axios.get(URL);
  const data = await response.data;
  return data;
}

export async function requestProfile(userName){
  const URL = `https://api.github.com/users/${userName}`;
  const response = await axios.get(URL);
  const data = await response.data;
  return data;
}

export async function getAndSetInfo(userName) {
  let profile = ""
  let repos = []
  
  try {
    profile = await requestProfile(userName)
    repos = await requestRopositories(userName)      
  } catch (error) {
    throw new Error()
  }
  
  return { userName, profile, repos }    
}