import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, editeTodo } from '../features/TodoSlice';

export default function Todolist() {
  const [edit, setEdit] = useState('');
  const [input_1, setInput_1] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const saveHandler = (id) => {
    if (edit && input_1.trim()) {
      dispatch(editeTodo({ id, title: input_1 }));
      setEdit('');  // Reset the edit mode
      setInput_1('');  // Clear the input after saving
    }
  };

  const editHandler = (todo) => {
    setEdit(todo.id);
    setInput_1(todo.title);
  };


  return (
    <>
      <ul>
        {
          todos.map((todo) => {
            return (
              <div key={todo.id}>
                {
                  todo.id === edit
                    ? (
                      <li className='font-bold font-mono p-2 list-none border border-white my-4 shadow-lg text-slate-500'>
                        <input
                          type="text"
                          value={input_1}
                          onChange={(e) => setInput_1(e.target.value)}
                        />
                        <span className='mx-4' onClick={() => saveHandler(todo.id)}>
                          <button>📁</button>
                        </span>
                        <span>
                          <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
                        </span>
                      </li>
                    )
                    : (
                      <li className='font-bold font-mono p-2 list-none border border-white my-4 shadow-lg text-slate-500'>
                        {todo.title}
                        <span className='mx-4' onClick={() => editHandler(todo)}>
                          <button>✏️</button>
                        </span>
                        <span>
                          <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
                        </span>
                      </li>
                    )
                }
              </div>
            );
          })
        }
      </ul>
    </>
  );
}
