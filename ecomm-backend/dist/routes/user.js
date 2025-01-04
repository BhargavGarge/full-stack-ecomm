import express from "express";
import { deleteUser, getAllUsers, getSingleUser, newUser, } from "../controllers/user.js";
import { adminOnly } from "../middleware/auth.js";
const app = express.Router();
app.post("/new", newUser);
app.get("/all", adminOnly, getAllUsers);
app
    .route("/:id")
    .get(getSingleUser)
    .delete(adminOnly, deleteUser);
export default app;
