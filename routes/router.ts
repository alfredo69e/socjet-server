import { Router, Request, Response } from 'express';

const router = Router();

router.get('/messages', (req: Request, res: Response) => {

    res.json({
        ok: true,
        message: `Todo esta bien!!`
    });

});

router.post('/messages', (req: Request, res: Response) => {

    const cuerpo = req.body

    res.json({
        ok: true,
        message: `Me llego esto ${cuerpo.cuerpo} de ${cuerpo.de}`
    });

});

router.post('/messages/:id', (req: Request, res: Response) => {

    const id = req.params.id

    res.json({
        ok: true,
        message: `Me llego esto ${id}`
    });

})

export default router;