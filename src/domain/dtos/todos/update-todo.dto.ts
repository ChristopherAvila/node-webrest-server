export class UpdateTodoDto{

    constructor(
        private readonly id : number,
        private readonly text? : string,
        private readonly completedAT? : Date
    ){}


    get values(){
        const returnObj : {[key : string] : any} = {};

        if ( this.text ) returnObj.text = this.text;
        if ( this.completedAT ) returnObj.completedAT = this.completedAT;

        return returnObj
    }

    static update( props : {[key:string]: any  } ) : [ string?, UpdateTodoDto?] {
        const { id, text, completedAT } = props;
        let newDateCompletedAT = completedAT;

        if( !id || isNaN( Number( id ) ) ){
            return ['id must be a number or a valid id']
        }

        if( completedAT ) {
            newDateCompletedAT = new Date( completedAT );
        if ( newDateCompletedAT.toString() === 'Invalid Date') {
            return ['CompletedAT must be a valid date'];
        }}
        return [ , new UpdateTodoDto( id, text, newDateCompletedAT )];
    }
}