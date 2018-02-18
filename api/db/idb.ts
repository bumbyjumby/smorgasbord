import { Exchange } from '../../shared/interfaces/iexchange';
export interface IDb {
    saveTicker(tickerBook: Exchange.ITickerBook);
    retrieveTickers(book: string, num: number): Exchange.ITicker[];
}
