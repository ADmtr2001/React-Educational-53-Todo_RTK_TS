import React, {FC, useEffect} from 'react';
import {fetchTodos} from "./store/action-creators/Todo";
import {useAppDispatch} from "./hooks/useAppDispatch";
import {useAppSelector} from "./hooks/useAppSelector";
import Navbar from './components/UI/Navbar';
import {Route, Routes, Navigate} from "react-router";
import Login from "./pages/Login";
import Main from "./pages/Main";
import AppRouter from "./components/AppRouter";

const App: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <React.Fragment>
      <Navbar/>
      <AppRouter/>
    </React.Fragment>
  );
};

export default App;