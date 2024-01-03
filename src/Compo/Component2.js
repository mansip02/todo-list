
import React,{useState} from 'react';
import { useTodoContext } from '../ProductContext';

const TodoList = () => {
  const { state, dispatch } = useTodoContext();
  const [updateText, setUpdateText] = useState('');
  const [selectedTodo, setSelectedTodo] = useState(null);



  const handleUpdateTodo = () => {
    if (selectedTodo) {
      dispatch({
        type: 'UPDATE_TODO',
        payload: { id: selectedTodo.id, text: updateText },
      });
      setUpdateText('');
      setSelectedTodo(null);
    }
  };


  const handleRemoveTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };

  return (
    <div>
    {/* <ul>
      {state.todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={() => setSelectedTodo(todo)}>Update</button>
          &nbsp;&nbsp;
          <button onClick={() => handleRemoveTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul> */}
    {selectedTodo && (
        <div>
          <input
            type="text"
            value={updateText}
            onChange={(e) => setUpdateText(e.target.value)}
          />
          <button onClick={handleUpdateTodo}>Update</button>
        </div>
      )}
      </div>
  );
};

export default TodoList;





























// import React, { useContext } from "react";
// import { DataContext } from "./Component1";

// const Compo2 = () => {
//   const data = useContext(DataContext);
//   return <h1>
//     <li>{data}</li>
//     </h1>;
// };

// export default Compo2;













































// import React, { useContext } from "react";

// const Lists = (props) => {
//   const { todolists } = props;

//   return (
//     <div>
//       <h1>todo list </h1>
//       <ul>
//         {todolists.map((todolists) => (
//           <li key={todolists.id}>
//             <span>{todolists.text}</span>
//             <button onClick={() => this.removeTodo(todolists.id)}>
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Lists;

































// import React from "react";
// import { useProduct } from "../ProductContext";

// const Compo2 = () => {
//     const { selectedProduct } = useProduct();

//     return (
//         <div>
//             <h2>ProductDetails</h2>
//             {selectedProduct ? (
//                 <div>
//                     <h3>{selectedProduct.name}</h3>                    
//                     </div>
//             ) : (
//                 <p>Select a product to view details.</p>
//             )}
//         </div>
//     );
// };

// export default Compo2;





