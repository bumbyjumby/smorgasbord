import { Observable } from 'rxjs/Observable';
export namespace Exchange {
    export interface IExchange {
        getTicker(ticker: string): Observable<ITicker>;
        getOpenOrders(ticker: string): Observable<IOpenOrders>;
    }
    export interface IOpenOrder {
        price: number;
        amount: number;
    }
    export interface IOpenOrders {
        timeStamp: number;
        bids: number[];
        asks: number[];
    }
    export interface IBook {
        book: string;
        description: string;
    }
    export interface ITickerBook extends ITicker {
        book: IBook;
    }
    export interface ITicker {
        high: number;
        last: number;
        timestamp: number;
        volume: number;
        vwap: number;
        low: number;
        ask: number;
        bid: number;
        // {"high:69.90","last:68.98","timestamp:1506887161","volume:2091.99412753","vwap:67.64582197","low:66.85","ask:68.87","bid:67.28"}
    }
    /*
    Account balance
    POST https://api.quadrigacx.com/v2/balance
    Params
    
    key - API key
    signature - signature
    nonce - nonce
    Result
    
    Returns JSON dictionary of all balances, e.g.:
    
    cad_balance - CAD balance
    btc_balance - BTC balance
    cad_reserved - CAD reserved in open orders
    btc_reserved - BTC reserved in open orders
    cad_available - CAD available for trading
    btc_available - BTC available for trading
    fee - customer trading fee
    
    */
    export interface IBalance {
        cad_balance: number;
        btc_balance: number;
        cad_reserved: number;
        btc_reserved: number;
        cad_available: number;
        btc_available: number;
        eth_available: number;
        eth_reserved: number;
        eth_balance: number;
        ltc_available: number;
        ltc_reserved: number;
        ltc_balance: number;
        fee: number;
    }


    export interface IBaseParams {
        key: string;
        signature: string;
        nonce: string;
    }

    /* \Transactions
    GET https://api.quadrigacx.com/v2/transactions
    List of recent trades
    
    Params:
    
    book - book to return orders for (optional, default btc_cad)
    time - time frame for transaction export ("minute" - 1 minute, "hour" - 1 hour). Default: hour.
    Result
    
    Returns descending JSON list of transactions. Every transaction (dictionary) contains:
    
    date - unix timestamp date and time
    tid - transaction id
    price - BTC price
    amount - BTC amount
    side - The trade side indicates the maker order side (maker order is the order that was open on the order book)
    */
    export class TransactionParams {

    }
    export class Transaction {
        amount: number;
        date: number;
        price: number;
        tid: number;
        side: string;

        // "amount:0.33458701","date:1506886659","price:5398.00","tid":1071374,"side:sell"

    }


    /*
    GET https://api.quadrigacx.com/v2/order_book
    List of all open orders
    
    Params:
    
    book - optional book to return orders for. Default btc_cad.
    group - optional group orders with the same price (0 - false; 1 - true). Default: 1.
    Result
    
    Returns JSON dictionary with "bids" and "asks". Each is a list of open orders and each order is represented as a list of price and amount.
    
    */
    export class OrderBookParams {
        book: string;
        group: boolean;
    }

    /*
    GET https://api.quadrigacx.com/v2/ticker?book=XXX
    The above url will return trading information from the specified book. If unspecified, the book will default to btc_cad
    
    Result
    
    Returns JSON dictionary:
    
    last - last BTC price
    high - last 24 hours price high
    low - last 24 hours price low
    vwap - last 24 hours volume weighted average price: vwap
    volume - last 24 hours volume
    bid - highest buy order
    ask - lowest sell order
    */
    // export interface ITickerBook {
    //     high: number;
    //     last: number;
    //     timestamp: number;
    //     volume: number;
    //     vwap: number;
    //     low: number;
    //     ask: number;
    //     bid: number;

    //     // {"high:69.90","last:68.98","timestamp:1506887161","volume:2091.99412753","vwap:67.64582197","low:66.85","ask:68.87","bid:67.28"}
    // }
    /*Open Orders
    POST https://api.quadrigacx.com/v2/open_orders
    Params
    
    key - API key
    signature - signature
    nonce - nonce
    book - optional, if not specified, will default to btc_cad
    Result
    
    Returns JSON list of open orders. Each order is represented as dictionary:
    
    id - order id
    datetime - date and time
    type - buy or sell (0 - buy; 1 - sell)
    price - price
    amount - amount
    status - status of the order (0 - active; 1 - partially filled)
    */
    export interface IOpenOrderParams extends IBaseParams {
        book: string;
    }
    export interface IOpenOrder {
        id: any; // - the order id
        datetime: string; // - date and time
        price: number; // - price of the order
        amount: number; // - amount of the order
        type: OrderType; // - buy or sell (0 - buy; 1 - sell)
        status: StatusType; // - status of the order (-1 - canceled; 0 - active; 1 - partially filled; 2 - complete)
    }
    export interface ILookupOrderParams extends IBaseParams {
        id: any;
    }
    export interface IOrder {

        id: any; // - the order id passed to that function
        book: string; // - which orderbook it belongs to
        price: number; // - price of the order
        amount: number; // - amount of the order
        type: OrderType; // - buy or sell (0 - buy; 1 - sell)
        status: StatusType; // - status of the order (-1 - canceled; 0 - active; 1 - partially filled; 2 - complete)
        created: string; // - date the order was created
        updated: string; // - date the order was last updated (not shown when status = 0)
        error: any;
    }
    export enum OrderType {
        BUY = '0',
        SELL = '1'
    }
    export enum StatusType {
        CANCELLED = '-1',
        ACTIVE = '0',
        PARTIAL = '1',
        COMPLETE = '2'
    }

    export interface ILimitOrder {
        amount: number; // amount of major currency
        price: number; // price to buy at
        book: string; // optional, if not specified, will default to btc_cad
    }
    export interface ILimitOrderParams extends ILimitOrder, IBaseParams {

    }

    export interface ILimitOrderResult {
        id: any; // order id
        datetime: string; // date and time
        type: OrderType; // buy or sell (0 - buy; 1 - sell)
        price: number; // price
        amount: number; // amount
        status: StatusType;
        error: any;
    }
}
