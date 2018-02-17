import * as express from 'express';
import { Response, Request } from 'express';
const router = express.Router();



router.get('/ticker/:book', (req: Request, res: Response) => {
    res.send('ticker = ' + req.params.book);
});


router.get('/', (req, res) => {
    res.send('api works');
});


router.get('/posts', (req, res) => {
    res.send('post works');
});
export = router;
