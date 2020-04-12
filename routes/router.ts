import { Router, Request, Response } from 'express';


const router = Router();


router.get('/message', (req: Request, res: Response) => {
    res.json({
        ok: true

    })
});

router.post('/message', (req: Request, res: Response) => {

    let cuerpo = req.body.cuerpo;
    let de = req.body.de;

    res.json({
        ok: true,
        cuerpo,
        de
    })
});

router.post('/message/:id', (req: Request, res: Response) => {

    let cuerpo = req.body.cuerpo;
    let de = req.body.de;
    let id = req.params.id;

    res.json({
        ok: true,
        cuerpo,
        de,
        id
    })
});


export default router;