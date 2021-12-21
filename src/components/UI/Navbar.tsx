import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

import {Wrapper} from "./Navbar.styles";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {setLogin} from "../../store/reducers/TodoSlice";

const Navbar = () => {
  const {login} = useAppSelector(state => state.todo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const login = localStorage.getItem('login') === 'true';
    dispatch(setLogin(login))
  }, []);

  const handleAuth = (login: boolean) => {
    localStorage.setItem('login', login.toString());
    dispatch(setLogin(login));
  };

  return (
    <Wrapper>
      {login
        ? (<Link to='/login' onClick={() => handleAuth(false)}>Logout</Link>)
        : (<Link to='/main' onClick={() => handleAuth(true)}>Login</Link>)}
    </Wrapper>
  );
};

export default Navbar;