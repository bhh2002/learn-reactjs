// import "./App.css";
import React, { useEffect } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import productApi from "./api/productApi";

import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";
import NotFound from "./features/Todo/components/NotFound";

// function App() {
//   const name = "Hoang";
//   const age = 18;
//   const isMale = true;
//   const student = {
//     name: "Easy Frontend",
//   };
//   const colorList = ["red", "green", "blue"];
//   console.log(colorList[1]);
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Bui Huy Hoang</p>
//         <p>
//           Xin chào {name} - {age} - {isMale ? "Male" : "Female"}
//         </p>
//         {/* Hàm if - else */}
//         {/* Dạng 1: */}
//         {isMale ? <p>Nam</p> : <p>Nu</p>}

//         {/* Dạng 2 tầng */}
//         {isMale && <p>Male</p>}
//         {!isMale && <p>Female</p>}

//         {/* Hàm if - else dùng <React.Fragment></React.Fragment> làm thẻ cha */}
//         {isMale && (
//           <React.Fragment>
//             <p>Male1</p>
//             <p>Male2</p>
//             <p>Male3</p>
//           </React.Fragment>
//         )}

//         {/* Dạng rút gọn của <React.Fragment></React.Fragment> */}
//         {isMale && (
//           <>
//             <p>Male1</p>
//             <p>Male2</p>
//             <p>Male3</p>
//           </>
//         )}

//         {/* Render các biến trong mảng */}
//         <p>{student.name}</p>

//         {/* Render các thành phần trong mảng */}
//         <ul>
//           {colorList.map((color) => (
//             <li key={color} style={{ color }}>
//               {color}
//             </li>
//           ))}
//         </ul>
//       </header>
//     </div>
//   );
// }

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      }
      const productList = await productApi.getAll(params);
      console.log(productList);
    };

    fetchProducts();
  }, []);

  // Lab Todo

  return (
    <div className="App">
      Header
      {/* <button>
        <Link to="/todos">Todos</Link>
      </button>
      <button>
        <Link to="/albums">Albums</Link>
      </button>
      <br /> */}
      <button>
        <NavLink to="/todos" activeClassName="active-menu">
          Todos
        </NavLink>
      </button>
      <button>
        <NavLink to="/albums">Albums</NavLink>
      </button>
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
