import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const database = mysql.createConnection(
    {
    host:"localhost",
    user:"root",
    password:"qwerty123",
    database:"course_builder"
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) =>
{
   res.json("HELLO!!! THIS IS THE BACKEND!!!");
});

app.get("/users", (req, res) =>
{
    const query = "SELECT * FROM course_builder.userdata";
    database.query(query, (err, data) =>
    {
        if(err)
            return res.json(err);
        return res.json(data);
    });
});

app.get("/courses", (req, res) =>
{
    const query = "SELECT * FROM course_builder.course";
    database.query(query, (err, data) =>
    {
        if(err)
            return res.json(err);
        return res.json(data);
    });
});

app.post("/addCourse", (req, res) =>
{
   const query = "INSERT INTO course_builder.course (`course_name`, `fk_user_id`, `date_created`, `about`, `course_price`) VALUES (?)";
   const values =
       [
           req.body.course_name,
           req.body.fk_user_id,
           req.body.date_created,
           req.body.about,
           req.body.course_price,
       ];

   database.query(query,[values], (err, data) =>
   {
       return res.json(data);
   });
});

app.listen(8800, () =>
{
   console.log("Connected to backend!");
});