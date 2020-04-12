"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const server_1 = __importDefault(require("../class/server"));
const sockets_1 = require("../sockets/sockets");
const router = express_1.Router();
router.get('/message', (req, res) => {
    res.json({
        ok: true
    });
});
router.post('/message', (req, res) => {
    let cuerpo = req.body.cuerpo;
    let de = req.body.de;
    const payload = req.body;
    const server = server_1.default.instance;
    server.io.emit('new-message', payload);
    res.json({
        ok: true,
        cuerpo,
        de
    });
});
router.post('/message/:id', (req, res) => {
    let cuerpo = req.body.cuerpo;
    let de = req.body.de;
    let id = req.params.id;
    const payload = {
        de,
        cuerpo
    };
    const server = server_1.default.instance;
    server.io.in(id).emit('private-message', payload);
    res.json({
        ok: true,
        cuerpo,
        de,
        id
    });
});
// servicio para octener todos los id
router.get('/users', (req, res) => {
    const server = server_1.default.instance;
    server.io.clients((err, clients) => {
        if (err) {
            return res.json({
                ok: false,
                err
            });
        }
        for (let i = 0; i < clients.length; i++) {
        }
        res.json({
            ok: true,
            clients
        });
    });
});
router.get('/users/detals', (req, res) => {
    res.json({
        ok: true,
        clients: sockets_1.usersConnects.getList()
    });
});
exports.default = router;
