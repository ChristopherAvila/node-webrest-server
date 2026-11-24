import { error } from "node:console";

export class TodoEntity{
    constructor(
        public id: number,
        public text : string ,
        public completedAT?: Date,
    ){}

    get isCompletedAt(){
        return !!this.completedAT
    }


    public static fromObject(  object : { [ key:string ] : any } ) : TodoEntity {
        const { text, id, completedAT } = object;

        if( !text ) throw ('Text property is required')
        if( !id )throw ('Id is required')

            let newDateCompletedAT;
        if (completedAT){
            newDateCompletedAT= new Date( completedAT );
        if( isNaN( newDateCompletedAT.getTime() )){
            throw ('CompletedAT is not a valid date')
        }
        
        }
       return new TodoEntity( id, text, completedAT);
    }
}



