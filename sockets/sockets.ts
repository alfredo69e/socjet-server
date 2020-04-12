import { Socket } from 'socket.io';
import socketIO from 'socket.io';
import { UserList } from '../class/user-list';
import { User } from '../class/user';


export const usersConnects = new UserList();

export const connectClient = (client: Socket) => {

    const user = new User(client.id);
    usersConnects.add(user);

}


// deconectar
export const disconnect = (client: Socket) => {

    client.on('disconnect', () => {
        console.log('Cliente Desconectado');

        usersConnects.removeUser(client.id);

    })

}

// mensajes
export const message = (client: Socket, io: socketIO.Server) => {

    client.on('message', (payload: any) => {
        console.log(`Mensaje recibido ${JSON.stringify(payload)}`);

        io.emit('new-message', payload);

    });

}

// configuara name user
export const configUser = (client: Socket, io: socketIO.Server) => {

    client.on('config-user', (payload: any, callback: Function) => {
        
        usersConnects.updateUser(client.id, payload.name);

        callback({
            ok: true,
            message: `User ${payload.name}, configurado`
        })

    });

}