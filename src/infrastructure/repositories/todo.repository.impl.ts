import { CreateTodoDto, TodoDataSource, TodoEntity, TodoRepository, UpdateTodoDto } from "../../domain";



export class TodoRepositoryImpl implements TodoRepository {

    constructor(
        private readonly dataSource : TodoDataSource){}

    getAll(): Promise<TodoEntity[]> {
        return this.dataSource.getAll();
    }
    create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
        return this.dataSource.create( createTodoDto );
    }
    findById(id: number): Promise<TodoEntity> {
        return this.dataSource.findById( id );
    }
    Update(updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {
        return this.dataSource.Update( updateTodoDto );
    }
    delete(id: number): Promise<TodoEntity> {
        return this.dataSource.delete( id );
    }

}