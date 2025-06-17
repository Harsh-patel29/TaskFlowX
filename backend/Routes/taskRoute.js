import { Router } from "express";
import {
  createTask,
  updateTask,
  getAllTask,
  deleteTask,
  updateTaskStatus,
} from "../Controller/task.controller.js";
import { authenticate } from "../Middleweares/authenticate.middleware.js";

const router = Router();

router.route("/createTask").post(authenticate, createTask);
router.route("/updateTask").patch(authenticate, updateTask);
router.route("/getAllTask").get(authenticate, getAllTask);
router.route("/deleteTask").delete(authenticate, deleteTask);
router.route("/updateTaskStatus").patch(authenticate, updateTaskStatus);

export default router;
