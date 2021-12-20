import React, {FC, FormEvent, useState} from 'react';

import {Wrapper} from "./AddForm.styles";
import {ITodo} from "../../types/ITodo";

interface AddFormProps {
  handleSubmit: (todo: ITodo) => void;
}

const AddForm: FC<AddFormProps> = ({handleSubmit}) => {
  const [text, setText] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleSubmit({id: Date.now(), title: text, completed: false});
    setText('');
  }

  return (
    <Wrapper onSubmit={onSubmit}>
      <input type='text' placeholder='Enter a New tas' value={text} onChange={(e) => setText(e.target.value)}/>
      <button type='submit'>Add</button>
    </Wrapper>
  );
};

export default AddForm;