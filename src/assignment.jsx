// const prod1= {name:"A4 sheet",isPacked:true}
// const prod2 = {name:"Pencil",isPacked:false}
// const prod3 = {name:"Notebook",isPacked:false}
// const prod4 = {name:"Calculator",isPacked:true}
// const prod5 = {name:"Book",isPacked:true}
// const prod6 = {name:"Pen",isPacked:false}
// const product_list = [prod1,prod2,prod3,prod4,prod5,prod6]

// export default function Excercise(){
//     return <section>
//         <ul>
//             {product_list.map((product)=>{
//                 return <li key={product.name}>{product.isPacked ? "✅" : "❌"} - {product.name}</li>
//             })}
//         </ul>
//     </section>
  
// };


// function ListItem(props){
    
// }


// export default function Excercise(){
//     const leftClick = (url) =>{
//         window.location.href = url;
//     }
//     return <section className="btnContainer">
//         <Button color={"green"} handleClick={()=>leftClick("www.theodinproject.com")}/>
//         {/* <Button size={64}/>
//         <Button color="red" text="Dont Click Me"/> */}
//     </section>
// }
// function Button({color,size,text,handleClick}){
//     const buttonStyle = {
//         backgroundColor:color ? color : "green",
//         fontSize:size + "px"
//     }

//     return <button style={buttonStyle} onClick={handleClick}>
//         {text}
//     </button>
// }
// // Setting up the default props for button component
// Button.defaultProps = {
//     color:"green",
//     size : 22,
//     text: "Click me",
// }


import React, { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default App;
