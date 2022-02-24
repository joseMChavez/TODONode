"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
const todo_1 = __importDefault(require("../../../Domain/models/todo"));
const typedi_1 = require("typedi");
const TodoService_1 = __importDefault(require("../../../Domain/services/TodoService"));
let TodoController = class TodoController {
    constructor(Service) {
        this.Service = Service;
    }
    GetAllTodo(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.Service.GetAll().then((result) => {
                return res.status(200).json(result);
            }).catch((err) => {
                return res.status(400).json(new Error(err));
            });
        });
    }
    GetTodo(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = _req.body;
            const obj = new todo_1.default({
                name: body.name,
                description: "",
                status: false
            });
            yield this.Service.Get(obj).then((result) => {
                return res.status(200).json(result);
            }).catch((err) => {
                return res.status(400).json({ error: err });
            });
        });
    }
    PostTodo(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = _req.body;
            const obj = new todo_1.default({
                _id: body._id,
                name: body.name,
                description: body.description,
                status: body.status
            });
            yield this.Service.Add(obj).then((result) => {
                return res.status(200).json(result);
            }).catch((err) => {
                return res.status(400).json({ error: err });
            });
        });
    }
    PutTodo(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = _req.body;
            const obj = new todo_1.default({
                _id: body._id,
                name: body.name,
                description: body.description,
                status: body.status
            });
            yield this.Service.Update(obj).then((result) => {
                return res.status(200).json(result);
            }).catch((err) => {
                return res.status(400).json({ error: err });
            });
        });
    }
    DeleteTodo(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = _req.body;
            console.log(_req.body._id);
            const obj = new todo_1.default({
                _id: body._id,
                name: body.name,
                description: body.description,
                status: body.status
            });
            yield this.Service.Delete(obj).then((result) => {
                return res.status(200).json(result);
            }).catch((err) => {
                return res.status(400).json({ error: err });
            });
        });
    }
};
TodoController = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [TodoService_1.default])
], TodoController);
exports.default = TodoController;
