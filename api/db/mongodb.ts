import { IDb } from './idb';
import { Exchange} from '../../shared/interfaces/iexchange';
export class MongoDb implements IDb {
    saveTicker(tickerBook: Exchange.ITickerBook) {
        throw new Error('Method not implemented.');
    }
    retrieveTickers(book: string, num: number): Exchange.ITicker[] {
        throw new Error('Method not implemented.');
    }
}
