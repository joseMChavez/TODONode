
import { ITodo } from "../types/todo";
import Todo from "../models/todo";
import { Service } from "typedi";

export default interface ITodoService{
    Add(todo:ITodo): Promise<ITodo>;
    Update(todo:ITodo): Promise<ITodo>;
    Delete(todo:ITodo): Promise<boolean>;
    Get(todo:ITodo): Promise<ITodo>;
    GetAll(): Promise<ITodo[]>;
}
@Service()
export default class TodoService implements ITodoService{
   public Add(todo: ITodo): Promise<ITodo> {
          return new Promise(async (resolve,rejects) =>{
            try {
                const _todo: ITodo = new Todo({
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
    public Update(todo: ITodo): Promise<ITodo> {
        return new Promise(async (resolve,rejects)  =>{
            try {
                const query = { name: todo.name,_id:todo._id };
                const update = { $set: { name:todo.name, status: todo.status,description:todo.description }};
                const options = {upsert:true};
                const updateTodo: ITodo | any = await Todo.findOneAndUpdate(query,update,options);   
                resolve(updateTodo);
              
              } catch (error) {
                rejects(error);
              }
          });
    }
    public Delete(todo: ITodo): Promise<boolean> {
          return new Promise(async (resolve,rejects)  =>{
            try {
                const query = { name: todo.name,_id:todo.id };
                const deleteResult= await Todo.deleteOne(query);
                resolve(deleteResult.deletedCount>0);
              
              } catch (error) {
                rejects([false,error]);
              }
          });
    }
    public Get(todo: ITodo): Promise<ITodo> {
    return new Promise(async (resolve,rejects)  =>{
        try {
            const query = { name: todo.name,_id:todo._id };
           
            const options = {upsert:true};

            const dTodo: ITodo | any = await Todo.findOne(query,options);
              
            resolve(dTodo);
          
          } catch (error) {
            rejects([null,error]);
          }
      });
    }
    public async GetAll(): Promise<ITodo[]> {
      const dTodo: ITodo[] = await Todo.find();
    return new Promise(async (resolve,rejects)  =>{
        try {
            
            resolve(dTodo );
          
          } catch (error) {
            rejects(error);
          }
      });
    }
}