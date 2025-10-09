import express from "express"
import cors from "cors"
import mysql2 from "mysql2"
import dotenv from "dotenv"
dotenv.config();
const app = express();
const port = 3000;

app.use(express.json())
app.use(cors())

const pool = mysql2
    .createPool({
        host: process.env.DB_HOST,
        database: "harmony",
        user: "root",
        password: "example"
    }).promise();


app.get('/products', async (req, res) => {
    let sql = "SELECT * from products";
    const [rows] = await pool.query(sql);
    res.json(rows)
})

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});