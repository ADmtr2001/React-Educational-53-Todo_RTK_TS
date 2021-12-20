import React, {useEffect} from 'react';
import {fetchUsers} from "./store/action-creators/Todo";
import {useAppDispatch} from "./hooks/useAppDispatch";
import {useAppSelector} from "./hooks/useAppSelector";

const App = () => {
  const dispatch = useAppDispatch();
  const {todos} = useAppSelector(state => state.todo);
  console.log(todos);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      App
    </div>
  );
};

export default App;