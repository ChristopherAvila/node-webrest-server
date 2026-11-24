
export class CreateTodoDto {
    private constructor(
        public readonly text : string,
        public readonly completedAT : Date
    ){}

    static create( props : { [ key : string] : any } ) : [ string | undefined, CreateTodoDto | undefined] {
        const { text, completedAT } = props;
        let newDate : Date = completedAT;
        if ( !text ) return [ 'Text property is required', undefined ];
        
        if ( completedAT !=null ){ 
            newDate = new Date( completedAT );
            if ( newDate.toString() === 'Invalid Date'){
                return ['Invalid Date', undefined]
            }
        }

        return [ undefined, new CreateTodoDto( text, newDate ) ];
    }
}




