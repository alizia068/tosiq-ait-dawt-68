import React, { useState } from "react";
import { FcFullTrash } from "react-icons/fc";

const Todo = () => {
    const [inputval, setInputVal] = useState("");
    const [listItems, setListItems] = useState([])
    const addNewItem = () => {
        if (inputval == "") {
            alert("Insert item first") 
            return;
        }
        let newArr = [...listItems, inputval];
        setListItems(newArr);
        setInputVal("")
    }

    const removeItem = (key) => {
        console.log(key) 
        let myarray = [...listItems];
        myarray.splice(key, 1);
        setListItems(myarray);
    }

  return (
    <>
      <div className="card-wrapper grid place-items-center">
        <div className="card bg-white rounded-lg p-3 my-4">
          <div className="card-header">
            <input 
            value={inputval}
            onChange={(e) => setInputVal(e.target.value)}
            className="p-1 outline-none bg-gray-100 rounded mr-1"
            type="text"
            placeholder="Enter Item"
             />
            <button
            onClick={addNewItem}
            className="bg-green-200 p-1 rounded"
            >Add Item</button>
          </div>
          <hr className="mt-3"/>
          { listItems.length > 0 ?
          <div className="card-footer">
            <ul>
              { listItems.map((item, i) => {
                return (
                    <li key={i} className="mt-2">
                        <div className="p-1 rounded bg-amber-100 flex justify-between">
                            <span>{item}</span>
                            <button onClick={() => removeItem(i)} className="cursor-pointer">
                                <FcFullTrash />
                            </button>
                        </div>
                    </li>
                )
              }) }
            </ul>
          </div> :
          <div className="italic text-gray-400">No Records</div>
            }
        </div>
      </div>
    </>
  );
};

export default Todo;
