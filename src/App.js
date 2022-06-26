import React, { useState } from "react";
import './App.css';
import TodoList from "./TodoList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value)
  }
  const deleteItem=(id)=>{
    console.log("deleted")
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index!== id;
      })
    })
   }
  const listOfItems = (e) => {
setItems((oldItems)=>{
  return[...oldItems,inputList]

})
setInputList("");
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add Items" onChange={itemEvent} value={inputList} required ></input>
          <button onClick={listOfItems}>+</button>
          <ol>
            {/* <li>{inputList}</li> 
            */}

{ items.map((itemval,index)=>{
 return <TodoList 
 key={index}
 id={index}
 text={itemval}
 onSelect={deleteItem}/>

  })}

          </ol>
        </div>
      </div>
    </>
  )
};
export default App;
