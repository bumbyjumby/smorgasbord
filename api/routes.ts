import * as express from 'express';
import { Exchange } from '../shared/interfaces/iexchange';
import { Response, Request } from 'express';
import { Db } from './db/db';
const router = express.Router();
// http://mherman.org/blog/2016/11/05/developing-a-restful-api-with-node-and-typescript/#the-api
router.get('/ticker/:book', (req: Request, res: Response) => {
    res.send('ticker = ' + req.params.book);
});

router.get('/', (req, res) => {
    res.send('api works');
});

router.post('/saveTicker', (req, res) => {
    const ticker: Exchange.ITickerBook = req.body;
    const db = new Db();
    db.saveTicker(ticker);
    res.send(JSON.stringify(ticker));
});
export = router;
