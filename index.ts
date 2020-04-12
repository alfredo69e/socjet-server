import Server from './class/server';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = Server.instance;

// bodyParser
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );

// Cors
server.app.use( cors({ origin: true, credentials: true }) );

// server.app.use( cors({ }));

server.app.use('/', router);


server.start(() => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);
});