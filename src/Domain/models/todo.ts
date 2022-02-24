import { ITodo } from "../types/todo"
import { model, Schema } from "mongoose"
import { ObjectId } from "mongodb";

const todoSchema: Schema = new Schema(
  {
    _id: {
      type: ObjectId,
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
  },
  { timestamps: true }
)

export default model<ITodo>("Todo", todoSchema)