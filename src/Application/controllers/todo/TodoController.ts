//import { Response, Request } from "express"
import { BodyTodo, ITodo } from "../../../Domain/types/todo"
import { Service } from "typedi";
import { Post,Put,Delete,Get, Route, Body, SuccessResponse, Controller, Path } from 'tsoa';
import  ITodoService  from "../../../Domain/services/TodoService";


@Route("todos")
@Service()
export  class TodoController extends Controller {
  constructor(private readonly Service: ITodoService) { super(); }
  @Get()
  public GetAllTodo( ):Promise<ITodo[]> {
     return new Promise<ITodo[]>(async (resolve,rejects)=>{
     await this.Service.GetAll().then((result)=>{
         this.setStatus(200);
         return  resolve(result);
      }).catch((err)=>{
        this.setStatus(400);
          return rejects({err: err.toJSON()});
      });
     })
  }
 
  @Get("{id}")
  public GetTodo( @Path() id:string):Promise<ITodo> {
      return new Promise<ITodo>(async (resolve,rejects)=>{
         await this.Service.Get(id).then((result)=>{
            this.setStatus(200);
            return resolve(result);
         }).catch((err)=>{
           this.setStatus(400);
            return rejects({ err: err.toJSON()});
     });
      })
  }

  @Post()
  public PostTodo(@Body() _req: BodyTodo):Promise<ITodo>{
   return new Promise<ITodo>(async (resolve,rejects)=>{
      await this.Service.Add(_req).then((result)=>{
         this.setStatus(201);
         return resolve(result);
      }).catch((err)=>{
         this.setStatus(400);
         return rejects({ err: err.toJSON()});
      });
   })
    
  }
 
  @Put()
  public PutTodo(@Body() _req: BodyTodo):Promise<ITodo>{
   return new Promise<ITodo>(async (resolve,rejects)=>{
      await this.Service.Update(_req).then((result)=>{
         this.setStatus(200);
         return resolve(result);
      }).catch((err)=>{
         this.setStatus(400);
         return rejects({ err: err.toJSON()});
      });
   })
  }
 
  @Delete()
  public DeleteTodo(@Body() _req: BodyTodo){
   return new Promise<Boolean>(async (resolve,rejects)=>{
      await this.Service.Delete(_req).then((result)=>{
         this.setStatus(201);
         return resolve(result);
      }).catch((err)=>{
         this.setStatus(400);
         return rejects({ err: err.toJSON()});
      });
   })
  }
}
