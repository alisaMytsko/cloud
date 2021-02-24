import React from 'react';
import './navbar.css'
import {NavLink} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { logoutActionCreator } from '../../actions/user'

const Navbar = () => {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <div className="container">
        <img src="" alt="" className="navbar__logo"/>
        <div className="navbar__header"><NavLink to="/">MERN CLOUD</NavLink></div>
        {!isAuth &&  <div className="navbar__login"><NavLink to="/autorization">Войти</NavLink></div>}
        {!isAuth &&   <div className="navbar__registration"><NavLink to="/registration">Регистрация</NavLink></div>}
        {isAuth &&   <div className="navbar__login" onClick={() => dispatch(logoutActionCreator())}>Выход</div>}
      </div>
    </div>
  );
};

export default Navbar;
