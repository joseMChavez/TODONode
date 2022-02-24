import { Document } from "mongoose"

export  interface ITodo extends Document {
  _id:string
  name: string
  description: string
  status: boolean
}