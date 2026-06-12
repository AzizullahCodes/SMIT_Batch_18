import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import DashboardLayout from './screens/dashboard/dashboard';
import Profile from "./screens/dashboard/profile/profile";
import Contact from "./screens/dashboard/contact/contact";
import ProductsScreen from './screens/products/products';
import Users from './screens/users/users';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route path='profile' element={<Profile />} />
          <Route path='contact' element={<Contact />} />
        </Route>
        <Route path='/products' element={<ProductsScreen />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;



// import React, { Fragment, useRef } from 'react';

// const App = () => {

//   const inputRef = useRef(null);

//   const submitForm = () => {
//     // const inputEl = document.getElementById("input");
//     // console.log(inputEl);

//     // inputEl.style.border = '2px solid red';

//     // console.log(inputRef.current);
//     inputRef.current.style.border = '2px solid blue';
//   };

//   return (
//     <>
//       <h1> App </h1>
//       <h2> React class </h2>

//       <input
//         ref={inputRef}
//         type="text"
//         placeholder='Write Something'
//         style={{ outline: "none" }}
//       // id='input'
//       />

//       <button onClick={submitForm}> Submit </button>
//     </>
//   );
// };

// export default App



// import React, { Component } from "react";

// class App extends Component {

//   componentDidMount() {
//     console.log('Hello data!');
//   };

//   render() {
//     return (
//       <h1> Class component in React! </h1>
//     );
//   }
// }

// export default App;