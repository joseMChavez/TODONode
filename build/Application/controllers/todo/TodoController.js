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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.TodoController = void 0;
const typedi_1 = require("typedi");
const tsoa_1 = require("tsoa");
const TodoService_1 = __importDefault(require("../../../Domain/services/TodoService"));
let TodoController = class TodoController extends tsoa_1.Controller {
    constructor(Service) {
        super();
        this.Service = Service;
    }
    GetAllTodo() {
        return new Promise((resolve, rejects) => __awaiter(this, void 0, void 0, function* () {
            yield this.Service.GetAll().then((result) => {
                this.setStatus(200);
                return resolve(result);
            }).catch((err) => {
                this.setStatus(400);
                return rejects({ err: err.toJSON() });
            });
        }));
    }
    GetTodo(id) {
        return new Promise((resolve, rejects) => __awaiter(this, void 0, void 0, function* () {
            yield this.Service.Get(id).then((result) => {
                this.setStatus(200);
                return resolve(result);
            }).catch((err) => {
                this.setStatus(400);
                return rejects({ err: err.toJSON() });
            });
        }));
    }
    PostTodo(_req) {
        return new Promise((resolve, rejects) => __awaiter(this, void 0, void 0, function* () {
            yield this.Service.Add(_req).then((result) => {
                this.setStatus(201);
                return resolve(result);
            }).catch((err) => {
                this.setStatus(400);
                return rejects({ err: err.toJSON() });
            });
        }));
    }
    PutTodo(_req) {
        return new Promise((resolve, rejects) => __awaiter(this, void 0, void 0, function* () {
            yield this.Service.Update(_req).then((result) => {
                this.setStatus(200);
                return resolve(result);
            }).catch((err) => {
                this.setStatus(400);
                return rejects({ err: err.toJSON() });
            });
        }));
    }
    DeleteTodo(_req) {
        return new Promise((resolve, rejects) => __awaiter(this, void 0, void 0, function* () {
            yield this.Service.Delete(_req).then((result) => {
                this.setStatus(201);
                return resolve(result);
            }).catch((err) => {
                this.setStatus(400);
                return rejects({ err: err.toJSON() });
            });
        }));
    }
};
__decorate([
    (0, tsoa_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "GetAllTodo", null);
__decorate([
    (0, tsoa_1.Get)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "GetTodo", null);
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "PostTodo", null);
__decorate([
    (0, tsoa_1.Put)(),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "PutTodo", null);
__decorate([
    (0, tsoa_1.Delete)(),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "DeleteTodo", null);
TodoController = __decorate([
    (0, tsoa_1.Route)("todos"),
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [TodoService_1.default])
], TodoController);
exports.TodoController = TodoController;
