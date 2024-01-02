import React from 'react'
import TodoForm from '../Compo/Component1';
import TodoList from '../Compo/Component2';
import { TodoProvider } from '../ProductContext';

export default function Mobile() {
  return (
    <TodoProvider>
      <h1>Product List</h1>
      <TodoForm />
      <TodoList />
    </TodoProvider>
  )
}
