import { useRef } from "react";
import UserCard from "./components/UserCard";
import userList from "./utils/userList";
const Users = () => {
  const text1 = useRef(null); // React feature: Hooks
  const text2 = useRef(null); // React feature: Hooks

  const show = () => {
    // let txt1 = document.getElementById("text").value;
    let txt1 = text1.current.value;
    // let txt2 = text2.current.value;
    text2.current.value = txt1;
    // let sum = parseInt(txt1) + parseInt(txt2)
    // console.log((txt1+txt2));
  };

  return (
    <>
      <div className="m-4 text-3xl">User Data</div>
      <div className="m-4">
        <input
          ref={text1}
          className="border-b-2 p-3 mr-3 focus:outline-0"
          type="number"
          placeholder="Type value 1..."
        />

        <button
          onClick={show}
          className="mx-3 bg-amber-200 p-3 rounded shadow cursor-pointer"
        >
          Click
        </button>
        
        <input
          ref={text2}
          className="border-b-2 p-3 focus:outline-0"
          type="number"
          placeholder="Type value 2..."
        />

        
      </div>
      {userList.length > 0 ? (
        <div className="m-4 grid grid-cols-12">
          {userList.map((user) => {
            return (
              <div key={user.id} className="m-1 col-span-4">
                <UserCard user={user} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="m-4 text-gray-500 italic">No record found</div>
      )}
    </>
  );
};

export default Users;
