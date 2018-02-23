import { IDb } from './idb';
import { Exchange } from '../../shared/interfaces/iexchange';
import { MongoClient } from 'mongodb';
import * as assert from 'assert';
export class Db implements IDb {
    // TODO: This doesnt belong here. config file?
    url = 'mongodb://localhost:27017';
    dbName = 'MongoTest';
    constructor() {
    }
    saveTicker(tickerBook: Exchange.ITickerBook) {
        MongoClient.connect(this.url, (err, client) => {
            assert.equal(null, err);
            console.log('connected to mongo');

            const db = client.db(this.dbName);

            client.close();
        });
    }
    retrieveTickers(book: string, num: number): Exchange.ITicker[] {
        throw new Error('Method not implemented.');
    }
}
