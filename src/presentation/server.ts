import express from "express";
import path from "node:path";

interface Options {
    port : number,
    public_path? : string
}

export class Server {

    private readonly port : number;
    private readonly public_path : string;
    private app = express();

    
    constructor( options : Options ){

        const { port, public_path = 'public' } = options;
        this.port = port;
        this.public_path = public_path;
    
    };

    async start(){    

        // MiddleWare
        
        this.app.use( express.static( this.public_path ) );

        this.app.get('/{*splat}', (req, res) => {

            const pathIndex = path.join( __dirname + `../../../${ this.public_path }/index.html` );
            res.sendFile( pathIndex );

        } );


        this.app.listen( this.port, () => { `server running on port ${ this.port }`});

    }

}