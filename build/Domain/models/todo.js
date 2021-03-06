"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongodb_1 = require("mongodb");
const todoSchema = new mongoose_1.Schema({
    _id: {
        type: mongodb_1.ObjectId,
        required: false,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Todo", todoSchema);
