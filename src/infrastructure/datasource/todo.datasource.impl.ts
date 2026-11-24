import { prisma } from "../../data/postgres";
import { CreateTodoDto, TodoDataSource, TodoEntity, UpdateTodoDto } from "../../domain";

export class TodoDataSourceImpl implements TodoDataSource{


    async getAll(): Promise<TodoEntity[]> {
        const todos = await prisma.todo.findMany(); 

        return todos.map( todo => TodoEntity.fromObject( todo ) );
    }

    async create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
         const newTodo = await prisma.todo.create( {
            data : createTodoDto!,
        } );
        return TodoEntity.fromObject( newTodo );
    }

    async findById(id: number): Promise<TodoEntity> {
        const todo = await prisma.todo.findUnique( { where : { id }, } );

        if( !todo ) throw `Todo with id: ${ id } not found`
        return TodoEntity.fromObject( todo );
    }
    
   async Update(updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {
        await this.findById( updateTodoDto.id );
        
       const updateTodo = await prisma.todo.update( { 
            where : { id: updateTodoDto.id },
            data: updateTodoDto!.values
        });
         return TodoEntity.fromObject( updateTodo) ;
    }

    async delete(id: number): Promise<TodoEntity> {
        try {
            await this.findById( id );
            
        } catch (error) {
            throw `Todo not found`
        }
        const deleteTodo = await prisma.todo.delete({
                 where : {
                id: id
             }});
       
        return TodoEntity.fromObject( deleteTodo );
    }

    
}


