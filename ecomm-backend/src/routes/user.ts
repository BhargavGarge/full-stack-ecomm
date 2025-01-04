import express from "express";
import {
  deleteUser,
  getAllUsers,
  getSingleUser,
  newUser,
} from "../controllers/user.js";
import { adminOnly } from "../middleware/auth.js";
const app = express.Router();

app.post("/new", newUser as any);
app.get("/all", adminOnly as any, getAllUsers as any);
app
  .route("/:id")
  .get(getSingleUser as any)
  .delete(adminOnly as any, deleteUser as any);

export default app;
