import { Document } from "mongoose"
import { ObjectId } from "mongodb";
export  interface ITodo extends Document {
  _id:ObjectId
  name: string
  description: string
  status: boolean
}
export type BodyTodo =  Pick<ITodo, "_id"|"name" | "description" | "status">;
