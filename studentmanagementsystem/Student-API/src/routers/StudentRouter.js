import express from "express";
import { fetchStudentById, fetchStudents, removeStudent, saveStudent, updateStudent } from "../controllers/StudentController.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const studentRouter = express.Router();

studentRouter.get('/',verifyToken,fetchStudents);
studentRouter.post('/',verifyToken,saveStudent);
studentRouter.get('/:id',verifyToken,fetchStudentById);
studentRouter.delete('/:id',verifyToken,removeStudent);
studentRouter.put('/:id',verifyToken,updateStudent);

export default studentRouter;