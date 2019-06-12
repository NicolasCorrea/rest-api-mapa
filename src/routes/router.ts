import {Router, Request, Response} from "express";
import MySQL from "../db/db";

const router = Router();



router.get("/markers", (req: Request, res: Response) => {
    const query = `SELECT * FROM markers`;
    MySQL.ejecutarQuery(query, (err: any, heroes: Object[]) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        } else {
            res.json({
                ok: true,
                heroes
            })
        }
    });
})
router.get('/markers/:name', (req: Request, res: Response) => {
    const name = req.params.name;
    const escapeName = MySQL.instance.cnn.escape(name);
    const query = `SELECT * FROM markers where name=${escapeName}`;
    MySQL.ejecutarQuery(query, (err: any, heroe: Object[]) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        } else {
            res.json({
                ok: true,
                heroe: heroe[0]
            })
        }
    });
})
export default router;