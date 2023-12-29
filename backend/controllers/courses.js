import { db } from "../database.js";

export const getCourses = (req, res) =>
{
    const query = "SELECT * FROM course";

    db.query(query, (err, data) =>
    {
        if(err)
            return res.json(err);
        return res.status(200).json(data);
    });
}

export const getCourse = (req, res) =>
{
    const query = "SELECT * FROM course where course_id = ?";

    db.query(query, [req.body.course_id], (err, data) =>
    {
        if(err)
            return res.json(err);
        return res.status(200).json(data);
    });
}

export const getUserCourses = (req, res) =>
{
    const query = "SELECT * FROM course where fk_user_id = ?";
    const values = [req.body.user_id];
    db.query(query, [values], (err, data) =>
    {
        if(err)
            return res.json(err);
        return res.status(200).json(data);
    });
}

export const addCourse = (req, res) =>
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

    
    db.query(query,[values], (err, data) =>
    {
        if(err)
            return res.json(err);
        return res.json(data);
    });
}

export const deleteCourse = (req, res) =>
{
    res.json("not implemented");
}

export const updateCourse = (req, res) =>
{
    res.json("not implemented");
}