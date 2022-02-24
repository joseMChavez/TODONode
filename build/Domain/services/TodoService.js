"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = __importDefault(require("../models/todo"));
const typedi_1 = require("typedi");
let TodoService = class TodoService {
    Add(todo) {
        return new Promise((resolve, rejects) => __awaiter(this, void 0, void 0, function* () {
            try {
                const _todo = new todo_1.default({
                    name: todo.name,
                    description: todo.description,
                    status: todo.status
                });
                const newTodo = yield _todo.save();
                resolve([newTodo, ""]);
            }
            catch (error) {
                rejects([null, error]);
            }
        }));
    }
    Update(todo) {
        return new Promise((resolve, rejects) => __awaiter(this, void 0, void 0, function* () {
            try {
                const query = { name: todo.name, _id: todo._id };
                const update = { $set: { name: todo.name, status: todo.status, description: todo.description } };
                const options = { upsert: true };
                const updateTodo = yield todo_1.default.findOneAndUpdate(query, update, options);
                resolve([updateTodo, ""]);
            }
            catch (error) {
                rejects([null, error]);
            }
        }));
    }
    Delete(todo) {
        return new Promise((resolve, rejects) => __awaiter(this, void 0, void 0, function* () {
            try {
                const query = { name: todo.name, _id: todo.id };
                const deleteResult = yield todo_1.default.deleteOne(query);
                resolve([deleteResult.deletedCount > 0, ""]);
            }
            catch (error) {
                rejects([false, error]);
            }
        }));
    }
    Get(todo) {
        return new Promise((resolve, rejects) => __awaiter(this, void 0, void 0, function* () {
            try {
                const query = { name: todo.name, _id: todo._id };
                const options = { upsert: true };
                const dTodo = yield todo_1.default.findOne(query, options);
                resolve([dTodo, ""]);
            }
            catch (error) {
                rejects([null, error]);
            }
        }));
    }
    GetAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, rejects) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const dTodo = yield todo_1.default.find();
                    resolve([dTodo, ""]);
                }
                catch (error) {
                    rejects([null, error]);
                }
            }));
        });
    }
};
TodoService = __decorate([
    (0, typedi_1.Service)()
], TodoService);
exports.default = TodoService;
