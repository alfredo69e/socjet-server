"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_list_1 = require("../class/user-list");
const user_1 = require("../class/user");
exports.usersConnects = new user_list_1.UserList();
exports.connectClient = (client) => {
    const user = new user_1.User(client.id);
    exports.usersConnects.add(user);
};
// deconectar
exports.disconnect = (client) => {
    client.on('disconnect', () => {
        console.log('Cliente Desconectado');
        exports.usersConnects.removeUser(client.id);
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
        callback({
            ok: true,
            message: `User ${payload.name}, configurado`
        });
    });
};
