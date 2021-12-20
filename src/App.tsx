import React, {FC, useEffect} from 'react';
import {fetchUsers} from "./store/action-creators/Todo";
import {useAppDispatch} from "./hooks/useAppDispatch";
import {useAppSelector} from "./hooks/useAppSelector";
import Navbar from './components/UI/Navbar';
import {Route, Routes, Navigate} from "react-router";
import Login from "./pages/Login";
import Main from "./pages/Main";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const {todos} = useAppSelector(state => state.todo);
  console.log(todos);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='main' element={<Main/>}/>
        <Route path='*' element={<Navigate to='/login'/>}/>
      </Routes>
    </React.Fragment>
  );
};

export default App;