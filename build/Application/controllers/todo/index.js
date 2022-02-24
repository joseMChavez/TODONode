"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TodoController_1 = __importDefault(require("./TodoController"));
const typedi_1 = __importDefault(require("typedi"));
const router = (0, express_1.Router)();
let td = typedi_1.default.get(TodoController_1.default);
router.get("/todos", (req, res) => td.GetAllTodo(req, res));
router.post("/add-todo", (req, res) => td.PostTodo(req, res));
router.put("/edit-todo", (req, res) => td.PutTodo(req, res));
router.delete("/delete-todo", (req, res) => td.DeleteTodo(req, res));
exports.default = router;
