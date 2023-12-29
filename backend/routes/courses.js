import express from "express";
import { addCourse, deleteCourse, getCourse, getCourses, getUserCourses, updateCourse } from "../controllers/courses.js";

const router = express.Router();

router.get("/all", getCourses);
router.get("/:id", getCourse);
router.post("/UserCourses", getUserCourses);
router.post("/addCourse", addCourse);
router.delete("/:id", deleteCourse);
//router.update("/:id", updateCourse);

export default router;