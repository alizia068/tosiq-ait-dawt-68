const users = [
    {id: 1, name: "Samith", email: "Samith@gmail.com", accountStatus: "Approved"},
    {id: 2, name: "Sam", email: "Sam@gmail.com", accountStatus: "Not Approved"},
    {id: 3, name: "Alice", email: "Alice@gmail.com", accountStatus: "Approved"},
    {id: 4, name: "John Doe", email: "John@gmail.com", accountStatus: "Not Approved"},
    {id: 5, name: "Victoria", email: "Victoria@gmail.com", accountStatus: "Approved"},
    {id: 6, name: "Jane", email: "Jane@gmail.com", accountStatus: "Not Approved"},
    {id: 7, name: "Vector", email: "Vector@gmail.com", accountStatus: "Approved"},
];


let accountStatus = "Not Approved";
let filteredUsers = users.filter((users)=>{
    if (users.accountStatus == accountStatus) {
        return users;
    };
});
console.log(filteredUsers);

// users.map((user) => {
//     console.log(user.accountStatus);
// })