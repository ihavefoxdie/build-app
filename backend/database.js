import mysql from "mysql";

export const db = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"qwerty123",
        database:"course_builder"
    }
)