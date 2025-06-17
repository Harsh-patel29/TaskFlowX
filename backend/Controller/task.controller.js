import { User } from "../Models/User.model.js";
import { Task } from "../Models/Task.model.js";
import { AsyncHandler } from "../Utils/AsyncHandler.js";
import { ApiError } from "../Utils/ApiError.js";
import { ApiResponse } from "../Utils/ApiResponse.js";

const createTask = AsyncHandler(async (req, res) => {
  const {
    title,
    description,
    Status,
    dueDate,
    assignedTo = [],
  } = req.body || {};
  if (!title || !description || !Status) {
    throw new ApiError(417, "All fields are required");
  }

  try {
    const task = await Task.create({
      user: req.user._id,
      title,
      description,
      Status,
      dueDate,
      assignedTo: [...new Set([req.user._id, ...assignedTo])],
    });
    await task.save();
    return res
      .status(200)
      .json(new ApiResponse(200, task, "Task Created Successfully"));
  } catch (error) {
    console.log(error);

    throw new ApiError(500, "Something went wrong while creating Task.");
  }
});

const updateTask = AsyncHandler(async (req, res) => {
  const { id, data } = req.body;
  if (!id || !data) {
    throw new ApiError(400, "Task ID and update data are required");
  }
  const { title, description, assignedTo, dueDate } = data;

  if (!title || !description || !Array.isArray(assignedTo)) {
    throw new ApiError(417, "Invalid task data");
  }

  if (task.user.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "You do not have permission to update this task");
  }

  const task = await Task.findById(id);
  if (!task) {
    throw new ApiError(404, "Task not found");
  }

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      {
        title,
        description,
        assignedTo: [...new Set([req.user._id, ...assignedTo])],
        dueDate,
      },
      { new: true, runValidators: true }
    );

    return res
      .status(200)
      .json(new ApiResponse(200, updatedTask, "Task updated successfully"));
  } catch (error) {
    console.error("Update error:", error);
    throw new ApiError(500, "Something went wrong while updating task");
  }
});

const getAllTask = AsyncHandler(async (req, res) => {
  const tasks = await Task.find({ isDeleted: false }).populate("Users", "Name");
  return res
    .status(200)
    .json(new ApiResponse(200, tasks, "Tasks fetched Successfully"));
});

const deleteTask = AsyncHandler(async (req, res) => {
  const task = await Task.findById(req.body.id);
  if (!task) {
    throw new ApiError(404, "Task not found");
  }

  await task.updateOne({ isDeleted: true });
  return res
    .status(200)
    .json(new ApiResponse(200, "", "Task deleted Successfully"));
});

const updateTaskStatus = AsyncHandler(async (req, res) => {
  const { id } = req.body;
  const task = await Task.findById(id);

  if (!task) {
    throw new ApiError(404, "Task not found");
  }
  task.Status = task.Status === "Pending" ? "Completed" : "Pending";
  await task.save();

  return res.status(200).json(new ApiResponse(200, "", "Task Status updated"));
});

export { createTask, updateTask, getAllTask, deleteTask, updateTaskStatus };
