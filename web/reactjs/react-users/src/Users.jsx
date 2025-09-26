import UserCard from "./components/UserCard";
import userList from "./utils/userList";
const Users = () => {
  return (
    <>
      <div className="m-4 text-3xl">User Data</div>
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
