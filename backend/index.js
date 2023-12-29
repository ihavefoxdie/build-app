import express from "express";
import mysql from "mysql";
import cors from "cors";
import cookieParser from "cookie-parser";
import easterEgg from "./routes/tester.js";
import authRoutes from "./routes/auth.js";
import courseRoutes from "./routes/courses.js";


const app = express();

const database = mysql.createConnection(
    {
    host:"localhost",
    user:"root",
    password:"qwerty123",
    database:"course_builder",
    port:3307
});

const corsOptions ={
    origin:'http://localhost:5173', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use("/testing", easterEgg);
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);

app.get("/api", (req, res) =>
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
   const query = "INSERT INTO course_builder.course (`course_name`, `fk_user_id`, `date_created`, `about`, `course_price`, `difficulty`, `length`) VALUES (?)";
   const values =
        [
           req.body[0],
           req.body[1],
           req.body[2],
           req.body[3],
           req.body[4],
           req.body[5],
           req.body[6]
        ];

    
    database.query(query,[values], (err, data) =>
    {
        if(err)
            return res.json(err);
        return res.json(data);
    });
});

app.listen(8800, () =>
{
   console.log("Connected to backend!");
});