import { Server } from "./presentation/server";
import { envs } from './config/envs'


( () => {

    main();

}) ();



function main() {
    const server = new Server( { 
        port : envs.PORT
    });
    server.start();
}