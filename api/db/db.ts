import { IDb } from './idb';
import { Exchange } from '../../shared/interfaces/iexchange';
import { MongoClient } from 'mongodb';
import * as assert from 'assert';
export class Db implements IDb {
    // TODO: This doesnt belong here. config file?
    private url = 'mongodb://localhost:27017';
    private dbName = 'MongoTest';
    private historicalCollectionName = 'historical';
    constructor() {
    }
    saveTicker(tickerBook: Exchange.ITickerBook) {
        MongoClient.connect(this.url, (err, client) => {
            assert.equal(null, err);
            const db = client.db(this.dbName);
            db.collection(this.historicalCollectionName).insertOne(tickerBook, (insertError, result) => {
                assert.equal(null, insertError);
                assert.equal(1, result.insertedCount);
            });
            client.close();
        });
    }
    retrieveTickers(book: string, num: number): Exchange.ITicker[] {
        throw new Error('Method not implemented.');
    }
}
