// TodoForm.js
import React, { useState } from "react";
import { useTodoContext } from "../ProductContext";

const TodoForm = () => {
  const { state, dispatch } = useTodoContext();
  const [newTodo, setNewTodo] = useState("");
  const [updateText, setUpdateText] = useState('');
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [ editMode, setEditMode ] = useState(false);
  const [ id, setId ] = useState();
  const [ textValue, setTextValue ] = useState('');
console.log("state", state)
  const handleAddTodo = () => {
    if (!editMode) {
      if (newTodo.trim() !== "") {
        dispatch({
          type: "ADD_TODO",
          payload: { id: Date.now(), text: newTodo },
        });
        setNewTodo("");
      }
    } else if (editMode) {
        console.log("fired")
        dispatch({
          type: "UPDATE_TODO",
          payload: { id : parseInt(id, 10), text: textValue },
        });

      setEditMode(false)
    }
  };

//   const handleUpdateTodo = (e) => {
//     if(!editMode) {
//         setNewTodo(e.target.value)
//     }else if (editMode) {
//       if (selectedTodo) {
//         dispatch({
//           type: "UPDATE_TODO",
//           payload: { id: selectedTodo.id, text: updateText },
//         });
//         setUpdateText("");
//         setSelectedTodo(null);
//       }
//     }
//   };


  const handleRemoveTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };

  const handleUpdate = (e) => {
    setEditMode(true)
    setTextValue(e.target.name)
    setId(e.target.id)  
}

  return (
    <>
      <div>
        <input
          type="text"
          value={editMode ? textValue : newTodo}
          onChange={(e) => {
            if (editMode) {
              setTextValue(e.target.value); // Update textValue in edit mode
            } else {
              setNewTodo(e.target.value); // Update newTodo in add mode
            }
          }}
          placeholder="Product Name"
        />
        <button onClick={handleAddTodo}>{!editMode ? 'Add Todo' : 'Update Todo'}</button>
      </div>
      <ul>
        {state.todos.map((todo) => (
            <li key={todo.id}>
            <span>{todo.text}</span>
            <button id={todo.id} name={todo.text} onClick={(e) => handleUpdate(e)}>Update</button>
            <button onClick={() => handleRemoveTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoForm;

// import React, { createContext, useState } from "react";
// import Compo2 from "./Component2";

// export const DataContext = createContext();
// const Compo1 = () => {
//   const [name, setName] = useState();
//   const [sirname, setSirname] = useState("");

//   // const Value = () => {
//   //   // setSirname = { sirname };
//   //   setName(name);
//   // };
//   return (
//     <div>
//       Name:
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       ></input>
//       <br />
//       <br />
//       {/* SirName:
//       <input type="text" onChange={() => sirname}></input>
//       <br />
//       <br /> */}
//       <button onClick={() => setSirname(name)}>Add</button>
//       <DataContext.Provider value={sirname}>
//         <Compo2 />
//       </DataContext.Provider>
//     </div>
//   );
// };

// export default Compo1;

// import React, { useState, useEffect } from "react";
// import Lists from "./Component2";

// const TodoList = () => {
//   const [name, setName] = useState([]);
//   const [newName, setNewName] = useState("");

//   useEffect(() => {
//     const savedTodos = JSON.parse(localStorage.getItem("name")) || [];
//     setName(savedTodos);
//   }, []);

//   const addName = () => {
//     if (newName.trim() !== "") {
//       setName([...name, { id: Date.now(), text: newName, completed: false }]);
//       setNewName("");
//     }
//   };

//   const toggleTodo = (id) => {
//     const updatedTodos = name.map((todo) =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo,
//     );
//     setName(updatedTodos);
//   };
// //   removeTodo = (id) => {
// //     const { todos } = this.state;
// //     const updatedTodos = todos.filter((todo) => todo.id !== id);
// //     this.setState({ todos: updatedTodos });
// //   };

//   return (
//     <div>
//       <h1>Functional Component</h1>
//       <div>
//         <input
//           type="text"
//           value={newName}
//           onChange={(e) => setNewName(e.target.value)}
//           placeholder="New Name"
//         />
//         <button onClick={addName}>Add Name</button>
//         <Lists todolists={name} />
//       </div>

//       {/* <ul>
//         {name.map((todo) => (
//           <li key={todo.id}>
//             <span>{todo.text}</span>
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   );
// };

// export default TodoList;

// import React from "react";
// import { useProduct } from "../ProductContext";

// const Comp1 = () => {
//     const { products, setSelectedProduct } = useProduct();

//     return (
//         <div>
//             <h2>ProductList</h2>
//             <ul>
//                 {products.map((product) => (
//                     <li key={product.id} onclick={() => setSelectedProduct(product)}>
//                         {product.name}
//                     </li>
//                 ))}
//             </ul>
//             </div>
//     );
// };

// export default Comp1;
