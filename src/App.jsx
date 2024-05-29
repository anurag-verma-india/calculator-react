// import { useState } from 'react'
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  const button_list = ["C", "+-", "%", "/", 7, 8, 9, "X", 4,5,6,"-",1,2,3,"+",0,".", "="];
    return (
    <div className="main">
      <div className="display" id="display">
        ‍
      </div>
      <div className="button_pad">
          {button_list.map((button, index) => {
            return (
              <div key={index} className={button === "=" ? "button_wrapper equals": "button_wrapper"}>
                <button
                  onClick={(e) => {
                    const display_js = document.getElementById("display");
                    display_js.innerText = e.target.innerText;
                  }}
                >
                  {button}
                </button>
              </div>
            );
          })}
        </div>
      </div>
  );
}

export default App;

// <div className="card">
//   <button onClick={() => setCount((count) => count + 1)}>
//     count is {count}
//   </button><br />
// </div>
