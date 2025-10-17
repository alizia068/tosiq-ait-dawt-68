import express from  'express';

const app = express();
// 3000, 5000, 7000, 8000, 8080,
const PORT = 5000;

const userRoles = [
    { id: 101, username: "usmanhaider242", role: "Super Admin" },
    { id: 102, username: "john.doe", role: "Admin" },
    { id: 103, username: "aliwarsi111", role: "Vendor" },
    { id: 104, username: "umaima980", role: "User" },
    { id: 105, username: "alice123", role: "Visitor" },
]

app.get('/', (req, res) => {
    res.send(userRoles)
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})