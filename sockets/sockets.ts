import { Socket } from 'socket.io';
import  socketIO  from 'socket.io';

export const disconnect = ( client: Socket ) => {

    client.on('disconnect', () => {
        console.log('Cliente Desconectado');
        
    })

}

export const message = ( client: Socket, io: socketIO.Server ) => {

    client.on('message', ( payload: any ) => {
        console.log(`Mensaje recibido ${ JSON.stringify(payload) }`);

        io.emit('new-message', payload);
        
    });

}