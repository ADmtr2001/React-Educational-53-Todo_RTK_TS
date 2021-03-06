import React from 'react';
import {useAppSelector} from "../hooks/useAppSelector";
import {Route, Routes, Navigate} from "react-router";
import {privateRoutes, publicRoutes} from "../routes/routes";
import {todoAPI} from "../services/TodoService";

const AppRouter = () => {
  const {login} = useAppSelector(state => state.todo);
  const {error, isLoading} = todoAPI.useFetchTodoQuery();

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    login
      ? (
        <Routes>
          {privateRoutes.map(route => <Route key={route.path} path={route.path} element={<route.element/>}/>)}
          <Route path='*' element={<Navigate to='/main'/>}/>
        </Routes>
      ) :
      (<Routes>
        {publicRoutes.map(route => <Route key={route.path} path={route.path} element={<route.element/>}/>)}
        <Route path='*' element={<Navigate to='/login'/>}/>
      </Routes>)
  );
};

export default AppRouter;