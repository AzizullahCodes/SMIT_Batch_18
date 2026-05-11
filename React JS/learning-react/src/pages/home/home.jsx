// // JavaScript XML (JSX)...!

// import React from "react";
import Header from "../../components/header/header";

// const Home = () => {

//   const userName = 'M Ahmed';
//   // console.log(userName);

//   const handleTest = () => {
//     console.log(`Hello ${userName}`);
//   }

//   return (
//     <div>
//       <Header />
//       <h1
//         // style={{ color: "blue" }}
//       > B18 - class </h1>
//       <h2> Hello {userName} </h2>
//       <h3> {2 + 2} </h3>
//       <button onClick={handleTest}> Click Me </button>
//     </div>
//   );
// };

// export default Home;






import React from 'react';
import users from "../../utils/dummy-users";

const Home = () => {

  console.log('Users: ', users);

  return (
    <div>
      <Header />
      <ul>
        {
          users?.map((item, index) => {
            return <li key={index}> {item.userName} </li>
          })
        }
      </ul>
    </div>
  );
};

export default Home;