import { Router, Request, Response } from "express";
import { getEmployee, getEmployees, postEmployee, updateEmployee, deleteEmployee } from "../controllers/employee";

const router = Router();

router.get("/:id", getEmployee);
router.get("/", getEmployees);
router.post("/", postEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

export { router };