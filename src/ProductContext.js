
import React, { createContext, useContext, useReducer } from 'react';

const todoReducer = (state, action) => {
  debugger
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: [...state.todos, action.payload] };
      case 'UPDATE_TODO':
        // return {
        //   todos: state.todos.map((todo) =>
        //     todo.id === action.payload.id ? todo.text = action.payload.text : todo
        //   ),
        // };  
        return {
          todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
        ),
        };
    case 'REMOVE_TODO':
      return { todos: state.todos.filter((todo) => todo.id !== action.payload) };
    default:
      return state;
  }
};


const initialState = {
  todos: [],
};

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};

export { TodoProvider, useTodoContext };





















// import React, { useState, createContext, useContext } from "react";

// const ProductContext = createContext();

// export const useProduct = () => {
//   return useContext(ProductContext);
// };

// export const ProductProvider = ({ children }) => {
//   const [products, setProducts] = useState([
//     { id: 1, name: "Noise Buds", price: 2000 },
//     { id: 2, name: "Boat Buds", price: 3500 },
//     { id: 3, name: "Samsung Buds", price: 3000 },
//   ]);

//   const [selectedProduct, setSelectedProduct] = useState(null);

//   return (
//     <ProductContext.Provider
//       value={{ products, setProducts, selectedProduct, setSelectedProduct }}
//     >
//       {children}
//     </ProductContext.Provider>
//   );
// };
