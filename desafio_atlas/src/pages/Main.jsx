import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserName } from '../redux/slices/generalSlice';


export default function Main() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState("");

  const handleClick = () => {
    dispatch(setUserName(user))
    navigate('/report');
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setUser(value);
  };
 
  return (
    <div className="">
      <p className="">Buscar usuário no GitHub</p>
      <form>
        <input
          className=""
          type="text"
          name="user"
          value={ user }
          onChange={ handleChange }
        />        
        <button
          type="button"
          // disabled={ emailTest || passwordTest }
          onClick={ handleClick }
          className=""
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
