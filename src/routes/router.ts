import {Router, Request, Response} from "express";
import MySQL from "../db/db";

const router = Router();



router.get("/markers", (req: Request, res: Response) => {
    const query = `SELECT * FROM markers`;
    MySQL.ejecutarQuery(query, (err: any, markers: Object[]) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        } else {
            res.json({
                ok: true,
                markers
            })
        }
    });
})
router.get('/markers/:name', (req: Request, res: Response) => {
    const name = req.params.name;
    const query = `SELECT * FROM markers WHERE name LIKE "%${name}%"`;
    MySQL.ejecutarQuery(query, (err: any, marker: Object[]) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        } else {
            res.json({
                ok: true,
                markers: marker
            });
        }
    });
})
export default router;