import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";

export interface DeleteTodoUseCase {
    excecute( id : number ) : Promise<TodoEntity>
}



export class DeleteTodo implements DeleteTodoUseCase {

    constructor(
        private readonly repository : TodoRepository
    ){}
    
    
    
    excecute(id : number): Promise<TodoEntity> {
        return this.repository.delete( id )    
    }


}

