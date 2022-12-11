import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../css/searchBar.css';
import { setUserInfo } from '../redux/slices/generalSlice';
import { getAndSetInfo } from '../services/apiRequests';

export default function SearchBar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [userName, setUserName] = useState("");
  const [emptyFieldFlag, setEmptyFieldFlag] = useState(false);
  const [foundUserFlag, setFoundUserFlag] = useState(true);

  const handleClick = async () => {
    setFoundUserFlag(true)
    if (userName.length === 0) setEmptyFieldFlag(true)
    else 
    {
      setEmptyFieldFlag(false)
      let foundUser = true
      let userInfor
      try {
        userInfor = await getAndSetInfo(userName)
      } catch (error) {
        foundUser = false
      }
      setFoundUserFlag(foundUser)
      if(foundUser){
        dispatch(setUserInfo(userInfor))
        navigate('/report');
      }
    }
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setUserName(value);
  };
 
  return (
    <div className="divmain">
      <p className="title">Buscar usuário no GitHub</p>
      <form>
        <input
          className="input"
          type="text"
          name="user"
          placeholder="digite o nome do usuário"
          value={ userName }
          onChange={ handleChange }
        />        
        <button
          type="button"
          onClick={ handleClick }
          className="button-31"
        >
          Pesquisar
        </button>
      </form>
      {emptyFieldFlag && <p className="alert" >Informe um nome de usuário válido do github</p>}
      {!foundUserFlag && <p className="alert" >Usuário não encontrado no github. Verifique se você digitou o nome corretamente</p>}
    </div>
  );
}
