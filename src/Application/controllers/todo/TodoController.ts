import { Response, Request } from "express"
import { ITodo } from "../../../Domain/types/todo"
import Todo from "../../../Domain/models/todo"
import { Service } from "typedi";
import  ITodoService  from "../../../Domain/services/TodoService";


@Service()
export default class TodoController {
  constructor(private readonly Service: ITodoService) { }
 
  async GetAllTodo(_req: Request, res: Response) {
     await this.Service.GetAll().then((result)=>{
        return res.status(200).json(result);
     }).catch((err)=>{
        return res.status(400).json(new Error(err));
     });
  }
  async GetTodo(_req: Request, res: Response) {
    const body = _req.body as Pick<ITodo, "_id"|"name" | "description" | "status">;
    const obj: ITodo= new Todo({
        name:body.name,
        description:"",
        status:false
    })
    await this.Service.Get(obj).then((result)=>{
        return res.status(200).json(result);
     }).catch((err)=>{
        return res.status(400).json({error:err});
     });
  }
  async PostTodo(_req: Request, res: Response){
    const body = _req.body as Pick<ITodo, "_id"|"name" | "description" | "status">;
   
    const obj: ITodo= new Todo({
        _id:body._id,
        name:body.name,
        description:body.description,
        status:body.status
    })
    await this.Service.Add(obj).then((result)=>{
      return res.status(200).json(result);
   }).catch((err)=>{
      return res.status(400).json({error:err});
   });
  }
  async PutTodo(_req: Request, res: Response){
    const body = _req.body as Pick<ITodo,"_id"|"name" | "description" | "status">;
    const obj: ITodo= new Todo({
        _id:body._id,
        name:body.name,
        description:body.description,
        status:body.status
    })
    await this.Service.Update(obj).then((result)=>{
      return res.status(200).json(result);
   }).catch((err)=>{
      return res.status(400).json({error:err});
   });
  }
  async DeleteTodo(_req: Request, res: Response){
    const body = _req.body as Pick<ITodo,"_id"| "name" | "description" | "status">;
    console.log(_req.body._id);
    const obj: ITodo= new Todo({
        _id:body._id,
        name:body.name,
        description:body.description,
        status:body.status
    })
     await this.Service.Delete(obj).then((result)=>{
      return res.status(200).json(result);
   }).catch((err)=>{
      return res.status(400).json({error:err});
   });
  }
}
