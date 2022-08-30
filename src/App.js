import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const name = "Hoang";
  const age = 18;
  const isMale = true;
  const student = {
    name: "Easy Frontend",
  };
  const colorList = ["red", "green", "blue"];
  console.log(colorList[1]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bui Huy Hoang</p>
        <p>
          Xin chào {name} - {age} - {isMale ? "Male" : "Female"}
        </p>
        {/* Hàm if - else */}
        {/* Dạng 1: */}
        {isMale ? <p>Nam</p> : <p>Nu</p>}

        {/* Dạng 2 tầng */}
        {isMale && <p>Male</p>}
        {!isMale && <p>Female</p>}

        {/* Hàm if - else dùng <React.Fragment></React.Fragment> làm thẻ cha */}
        {isMale && (
          <React.Fragment>
            <p>Male1</p>
            <p>Male2</p>
            <p>Male3</p>
          </React.Fragment>
        )}

        {/* Dạng rút gọn của <React.Fragment></React.Fragment> */}
        {isMale && (
          <>
            <p>Male1</p>
            <p>Male2</p>
            <p>Male3</p>
          </>
        )}

        {/* Render các biến trong mảng */}
        <p>{student.name}</p>

        {/* Render các thành phần trong mảng */}
        <ul>
          {colorList.map((color) => (
            <li key={color} style={{ color }}>
              {color}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
