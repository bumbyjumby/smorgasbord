import * as express from 'express';
import { Exchange } from '../shared/interfaces/iexchange';
import { Response, Request } from 'express';
const router = express.Router();

router.get('/ticker/:book', (req: Request, res: Response) => {
    res.send('ticker = ' + req.params.book);
});

router.get('/', (req, res) => {
    res.send('api works');
});

router.post('/saveTicker/:ticker', (req, res) => {
    const ticker: Exchange.ITickerBook = req.body;
    res.send(JSON.stringify(ticker));
});
export = router;
