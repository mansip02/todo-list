
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
import Mobile from './Component/Mobile';
const App = () => {
  return (
    <>
    <Router>
     <div>
       <nav>
         <ul>
           <li>
             <Link to="/Home">Home</Link>
           </li>
            <li>
             <Link to="/About">About</Link>
           </li>
           <li>
             <Link to="/Mobile">Mobile</Link>
           </li>
                     
         </ul>
       </nav>
   

     <Routes>
       <Route path="/Home" element={<Home />} />
       <Route path="/About" element={<About />} />
       
       <Route path="/Mobile" element={<Mobile />} />
       
     </Routes>
     </div>
   </Router>

    
    </>
    
  );
};

export default App;











































// import React from "react";
// import Compo1 from "./Compo/Component1";

// export default function App() {
//   // const [name, setName] = useState("");
//   // const [sirname, setSirname] = useState("");

//   // const Value = () => {
//   //   setSirname = { sirname };
//   //   setName = { name };
//   // };
//   // useEffect(() => {});
//   return (
//     <div>
//       <Compo1 />
//       {/* </div>
//     <div> */}
//       {/* <Compo2 /> */}
//     </div>
//   );
// }











































// import React from "react";
// import TodoList from "./Compo/Component1";

// const App=()=>{
//   return(
//     <div>
//       <TodoList/>
//     </div>
//   );
// }

// export default App;
































// import React from "react";
// import { ProductProvider } from "./ProductContext";
// import Compo1 from "./Compo/Component1";
// import Compo2 from "./Compo/Component2";

// const App = () => {
//   return (
//     <ProductProvider>
//       <div style={{display: "flex"}}>
//         <Compo1/>
//         <Compo2/>
//       </div>
//     </ProductProvider>
//   );
// };

// export default App;
















// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./Component/Home";
// import About from "./Component/About";
// import Test from "./Component/test";
// import Mobile from "./Component/Mobile";

// import Product1 from "./Component/Product1";
// import Headphones from "./Component/Headphones";
// const App = () => {
//   // const [change, setChange] = useState();
//   // const [displayName, setDisplayName] = useState();

//   // const Data = [
//   //   {
//   //     name: "Mansi",
//   //     surname: "Parmar",
//   //   },
//   //   {
//   //     name: "Rahul",
//   //     surname: "Shinde",
//   //   },
//   // ];


//   return (
//     <Router>
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/Home">Home</Link>
//           </li>
//           <li>
//             <Link to="/About">About</Link>
//           </li>
//           <li>
//             <Link to="/test">Test</Link>
//           </li>
          
//           <li>
//             <Link to="/Product1">Product1</Link>
//           </li>
//         </ul>
//       </nav>
   

//     <Routes>
//       <Route path="/Home" element={<Home />} />
//       <Route path="/About" element={<About />} />
//       <Route path="/test" element={<Test />} />
//       <Route path="/Component/mobile" element={<Mobile />} />
//       {/* <Route path="/Product/*" element={<Product />} /> */}
//       <Route path="/Product1" element={<Product1 />} />
//       <Route path="/Component/Headphones" element={<Headphones />} />
//     </Routes>
//     </div>
//   </Router>
  
//   );
// }

// export default App;




