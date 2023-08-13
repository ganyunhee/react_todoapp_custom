import React, { useState, useEffect, useRef } from 'react';
import {
  Container, Form, Title,
  TextInputWrapper, TextInput, SubmitInput,
  UnorderedList, ListItem,
  TodoText, TodoDelete } from './styledComponents'
import './App.css'

export default function App() {
  const [todo, setTodo] = useState([]);
  const [todoId, setTodoId] = useState(0);
  const inputRef = useRef(null);
  const [checkedItems, setCheckedItems] = useState({});

  const handleSubmit = (todoText) => {
    if(todoText.trim() === '') {
      alert('Write something. Don\'t be lazy.');
      return;
    }

    setTodo([
      ...todo,
      {
        todoId: todoId,
        todoText: todoText,
        todoDone: false
      }
    ])
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [todoId]: false
    }));
    setTodoId(todoId + 1)
  }

  const handleDelete = (todoId) => {
    setTodo(todo.filter(item => item.todoId !== todoId))
  }

  const handleToggle = (todoId) => {
    setTodo(
      todo.map((item) =>
        item.todoId === todoId ? { ...item, todoDone: !item.todoDone } : item
      )
    );
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [todoId]: !prevCheckedItems[todoId]
    }));
  }

  useEffect(() => {
    const defaultTodo = JSON.parse(localStorage.getItem("todo"))

    if(defaultTodo && defaultTodo.length > 0) {
      setTodo(defaultTodo)
      setTodoId(defaultTodo[defaultTodo.length - 1].todoId + 1)
    }
  }, [])


  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo))
  }, [todo])

  useEffect(() => {
    const handleKeyPress = (event) => {
      if(event.key === '/') {
        event.preventDefault();
        inputRef.current.focus();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const updatedCheckedItems = {};
    todo.forEach((item) => {
      updatedCheckedItems[item.todoId] = item.todoDone;
    });
    setCheckedItems(updatedCheckedItems);
  }, [todo]);

  const handleCheckboxToggle = (todoId) => {
    setTodo((prevTodo) =>
      prevTodo.map((item) =>
        item.todoId === todoId
          ? { ...item, todoDone: !item.todoDone }
          : item
      )
    );
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [todoId]: !prevCheckedItems[todoId]
    }));
  };

  return (
    <Container>
      <Title>Your To-Do List</Title>
      <Form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit(e.target.todo.value)
        e.target.todo.value = ''
      }}>
        <TextInputWrapper>
          <TextInput type='text' placeholder='Press  < / >  to create TODO  . . .' name='todo' ref={inputRef}/>
          <SubmitInput type='submit' value=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgba(254, 254, 254, 0.35)" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </SubmitInput>
        </TextInputWrapper>
      </Form>
      <UnorderedList>
        {todo.map((item, index) =>
        <ListItem key={index}>
          <input type="checkbox" id={`checkbox-${item.todoId}`} className="accent-slate-600/25 w-4 h-4 ml-0 mr-5 px-0 hover:accent-slate-400" checked={checkedItems[item.todoId]} onChange={() => handleCheckboxToggle(item.todoId)} />
          <TodoText onClick={() => handleToggle(item.todoId)} style={item.todoDone ? { textDecoration: 'line-through'} : {} }>
            {item.todoText}
          </TodoText>
          <TodoDelete onClick={() => handleDelete(item.todoId)}>X</TodoDelete>
        </ListItem>)}
      </UnorderedList>
    </Container>
  );
}