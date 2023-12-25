import { db } from "../database.js";
import bcrypt from "bcryptjs";
import jsonwt from "jsonwebtoken";

export const register = (req, res) =>
{
    const query = "select * from userdata where email = ? or login = ?"

    db.query(query, [req.body.email, req.body.login], (error, data) =>
    {
        if(error)
        {
            return res.json(err);
        }
        else if (data.length)
        {
            return res.status(409).json("Email and/or username has already been registered.");
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const addUser = "insert into userdata (`login`, `email`, `password`) values (?)";
        const values = [
            req.body.login,
            req.body.email,
            hash,
        ];

        db.query(addUser, [values], (err, data)=>
        {
            if(err)
            {
                return res.json(err);
            }
            return res.status(200).json("New user has been registered!");
        });
    });
}

export const login = (req, res) =>
{
    const query = "select * from userdata where login = ?"

    db.query(query, [req.body.login], (error, data) =>
    {
        if(error)
        {
            return res.json(err);
        }
        else if (data.length === 0)
        {
            return res.status(404).json("User does not exist.");
        }

        const passCheck = bcrypt.compareSync(req.body.password, data[0].password);
        if(!passCheck)
        {
            return res.status(400).json("Couldn't sign in.\nAre you sure provided username and password are correct?")
        }

        const token = jsonwt.sign({ id: data[0].id }, "jsonwtkey");
        const {password, ...other} = data[0];

        res.cookie("access_token", token, {
            httpOnly:true,
        }).status(200).json(other).end();
    });
}

export const logout = (req, res) =>
{

}