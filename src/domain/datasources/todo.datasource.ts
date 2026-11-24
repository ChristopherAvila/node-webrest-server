import { promises } from "node:dns";
import { CreateTodoDto, UpdateTodoDto } from "../dtos";
import { TodoEntity } from "../entities/todo.entity";




export abstract class TodoDataSource{

    
    abstract getAll() : Promise<TodoEntity[]>
    
    
    abstract create( createTodoDto:CreateTodoDto ) : Promise <TodoEntity>;
    abstract findById( id : number) : Promise<TodoEntity>;
    abstract Update( updateTodoDto: UpdateTodoDto ) :Promise<TodoEntity>;
    abstract delete( id : number) : Promise<TodoEntity>;


}