import React from 'react';
import { useSelector } from 'react-redux';


export default function Report() {

  const user = useSelector((state) => state.general.user)
 
  return (
    <div className="container">
      <p className="login-page-title">{user}</p>
      <form>
        <input
          className="email-input"
          type="text"
          name="email"
          // value={ user.email }
          data-testid="email-input"
          // onChange={ handleChange }
        />
        <input
          className="password-input"
          type="password"
          name="password"
          // value={ user.password }
          data-testid="password-input"
          // onChange={ handleChange }
        />
        <button
          data-testid="login-submit-btn"
          type="button"
          // disabled={ emailTest || passwordTest }
          // onClick={ handleClick }
          className="login-submit-btn"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
