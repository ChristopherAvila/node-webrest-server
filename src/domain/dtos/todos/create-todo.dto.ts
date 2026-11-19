import { text } from "node:stream/consumers";

export class CreateTodoDto {

    private constructor(
        public readonly text : string,
        public readonly completedAT: Date
    ){}

    static create( props : { [ key : string] : any } ) : [ string | undefined, CreateTodoDto | undefined] {
        const { text, completedAT } = props;

        if ( !text ) return [ 'Text property is required', undefined ];

        return [ undefined, new CreateTodoDto( text, completedAT ) ];
    }
}




