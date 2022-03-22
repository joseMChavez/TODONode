
import { BodyTodo,ITodo } from "../types/todo";
import Todo from "../models/todo";
import { Service } from "typedi";

export default interface ITodoService{
    Add(todo:BodyTodo): Promise<ITodo>;
    Update(todo:BodyTodo): Promise<ITodo>;
    Delete(todo:BodyTodo): Promise<boolean>;
    Get(id:string): Promise<ITodo>;
    GetAll(): Promise<ITodo[]>;
}


@Service()
export default class TodoService implements ITodoService{
   public Add(todo: BodyTodo): Promise<ITodo> {
          return new Promise(async (resolve,rejects) =>{
            try {
                const _todo: ITodo = new Todo({
                    _id:null,
                    name: todo.name,
                    description: todo.description,
                    status: todo.status
                  });
                const newTodo: ITodo = await _todo.save();
                resolve(newTodo);
              
              } catch (error) {
                rejects(error);
              }
          });
    }
    public Update(todo: BodyTodo): Promise<ITodo> {
        return new Promise(async (resolve,rejects)  =>{
            try {
                const query = { name: todo.name,_id:todo._id };
                const update = { $set: { name:todo.name, status: todo.status,description:todo.description }};
                const options = {upsert:true};
                const updateTodo: BodyTodo | any = await Todo.findOneAndUpdate(query,update,options);   
                resolve(updateTodo);
              
              } catch (error) {
                rejects(error);
              }
          });
    }
    public Delete(todo: BodyTodo): Promise<boolean> {
          return new Promise(async (resolve,rejects)  =>{
            try {
                const query = { name: todo.name,_id:todo._id };
                const deleteResult= await Todo.deleteOne(query);
                resolve(deleteResult.deletedCount>0);
              
              } catch (error) {
                rejects(error);
              }
          });
    }
    public Get(id:string): Promise<ITodo> {
    return new Promise(async (resolve,rejects)  =>{
        try {
            const query = {_id: id };
           
            const options = {upsert:true};

            const dTodo: BodyTodo | any = await Todo.findOne(query,options);
              
            resolve(dTodo);
          
          } catch (error) {
            rejects(error);
          }
      });
    }
    public async GetAll(): Promise<ITodo[]> {
     
    return new Promise(async (resolve,rejects)  =>{
        try {
            const dTodo: ITodo[] = await Todo.find();
            resolve(dTodo);
          
          } catch (error) {
            rejects(error);
          }
      });
    }
}