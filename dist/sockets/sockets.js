"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnect = function (client) {
    client.on('disconnect', function () {
        console.log('Cliente Desconectado');
    });
};
exports.message = function (client, io) {
    client.on('message', function (payload) {
        console.log("Mensaje recibido " + JSON.stringify(payload));
        io.emit('new-message', payload);
    });
};
