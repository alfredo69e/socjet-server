"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_list_1 = require("../class/user-list");
const user_1 = require("../class/user");
exports.usersConnects = new user_list_1.UserList();
exports.connectClient = (client, io) => {
    const user = new user_1.User(client.id);
    exports.usersConnects.add(user);
};
// deconectar
exports.disconnect = (client, io) => {
    client.on('disconnect', () => {
        console.log('Cliente Desconectado');
        exports.usersConnects.removeUser(client.id);
        io.emit('user-actives', exports.usersConnects.getList());
    });
};
// mensajes
exports.message = (client, io) => {
    client.on('message', (payload) => {
        console.log(`Mensaje recibido ${JSON.stringify(payload)}`);
        io.emit('new-message', payload);
    });
};
// configuara name user
exports.configUser = (client, io) => {
    client.on('config-user', (payload, callback) => {
        exports.usersConnects.updateUser(client.id, payload.name);
        io.emit('user-actives', exports.usersConnects.getList());
        callback({
            ok: true,
            message: `User ${payload.name}, configurado`
        });
    });
};
// optenes usuarios
exports.getUsers = (client, io) => {
    client.on('get-users', (payload, callback) => {
        io.to(client.id).emit('user-actives', exports.usersConnects.getList());
    });
};
