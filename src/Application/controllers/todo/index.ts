import { Router } from "express"
import TodoController from "./TodoController"

import Container from 'typedi';

const router: Router = Router()
let td = Container.get(TodoController);
router.get("/todos",(req, res) =>  td.GetAllTodo(req,res))

router.post("/add-todo",(req, res) =>  td.PostTodo(req,res))

router.put("/edit-todo",(req, res) =>  td.PutTodo(req,res))

router.delete("/delete-todo",(req, res) =>  td.DeleteTodo(req,res))

export default router