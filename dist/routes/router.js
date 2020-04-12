"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.get('/message', function (req, res) {
    res.json({
        ok: true
    });
});
router.post('/message', function (req, res) {
    var cuerpo = req.body.cuerpo;
    var de = req.body.de;
    res.json({
        ok: true,
        cuerpo: cuerpo,
        de: de
    });
});
router.post('/message/:id', function (req, res) {
    var cuerpo = req.body.cuerpo;
    var de = req.body.de;
    var id = req.params.id;
    res.json({
        ok: true,
        cuerpo: cuerpo,
        de: de,
        id: id
    });
});
exports.default = router;
