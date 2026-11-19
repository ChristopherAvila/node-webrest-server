import { Request, Response } from "express";
import { prisma } from "../../data/postgres/index";
import { CreateTodoDto, UpdateTodoDto } from "../../domain/dtos";


export class TodosController { 

    constructor() {};

    public getTodos = async (req: Request, res: Response) => {
     const todos = await prisma.todo.findMany(); 
     return res.json( todos );
    };

    public getTodosById =  async (req: Request, res: Response) => {
        const id = +req.params.id!;
        if ( isNaN( id ) ) return res.status( 400 ).json( {error: `ID argument is not a number`})
        
        const todo = await prisma.todo.findUnique( { where : { id }, } );

        ( todo )
        ? res.json( todo )
        : res.status( 404 ).json( {error: `TODO with id: ${ id } not found`} )
    };


    public createTodo = ( async (req: Request, res: Response) => {
        const [ error, createTodoDto ] = CreateTodoDto.create( req.body );
        if (error) return res.status( 400 ).json( {error: error })

        const newTodo = await prisma.todo.create( {
            data : { 
                text : createTodoDto!.text,
                completedAT: createTodoDto?.completedAT == null
                ? null
                : new Date( createTodoDto.completedAT )
            
            },
        } );

        res.json( newTodo );
       
    });

    public updateTodo = ( async ( req: Request, res: Response) => {
        const id = +req.params.id!;
        const [ error, updateTodoDto ] = UpdateTodoDto.update({...req.body, id});
        if( error ) return res.status( 400 ).json({ error: error });

        const todo = await prisma.todo.findFirst(
            { where :{ id }  }
        )

        if( !todo ) return res.status( 404 ).json( {error: `Todo with ${ id } not found` });
        
        
        const updateTodo = await prisma.todo.update( { 
            where : { id },
            data: updateTodoDto!.values
        });

        res.json( updateTodo );

    })

    public deleteTodo = ( async ( req: Request, res: Response ) => {
        const id = +req.params.id!;
        if ( isNaN( id )) return res.status( 400 ).json( { error : `ID argument is not a number` });

        const todo = await prisma.todo.deleteMany({
            where : {
            id: id
        }})
        if ( todo.count === 0)  return res.status( 404 ).json( {error: `Todo with ${ id } not found` } );
        
        res.status( 200 ).json( { message: `Todo with id: ${ id } deleted successfully` } ); 

    } );










}








