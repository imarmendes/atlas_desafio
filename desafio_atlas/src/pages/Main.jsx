import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserInfo } from '../redux/slices/generalSlice';
import { getAndSetInfo } from '../services/apiRequests';


export default function Main() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [userName, setUserName] = useState("");
  const [foundUserFlag, setFoundUserFlag] = useState(true);

  const handleClick = async () => {
    let foundUser = true
    let userInfor
    try {
      userInfor = await getAndSetInfo(userName)
    } catch (error) {
      foundUser = false
    }
    
    setFoundUserFlag(foundUser)
    dispatch(setUserInfo(userInfor))
    navigate('/report');
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setUserName(value);
  };
 
  return (
    <div className="">
      <p className="">Buscar usuário no GitHub</p>
      <form>
        <input
          className=""
          type="text"
          name="user"
          value={ userName }
          onChange={ handleChange }
        />        
        <button
          type="button"
          disabled={ userName.length === 0 }
          onClick={ handleClick }
          className=""
        >
          Pesquisar
        </button>
      </form>
      {!foundUserFlag && <p>Usuário não encontrado no github. Verifique se você digitou o nome corretamente</p>}
    </div>
  );
}
