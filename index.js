// require('dotenv').config;
// const  ccxt = require('ccxt');
// const  axios = require('axios');
// const { binance } = require('ccxt');

// const tick = async() => {

//     const {asset,base,spred, allocation}=config;
//     const market = `${asset}/${base}`;

//     const orders = await binanceClient.fetchOpenOrders(market);
//     orders.forEach(async order =>{

//         await binanceClient.cancelOder(order.id)
//     });


//     const results = await Promise.all([
//         axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'),
//         axios.get('https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd'),
//     ]);
//     const marketPrice = results[0].data.bitcoin.usd / results[1].data.tether.usd;
    
//     const sellPrice = marketPrice * (1 + spread);
//     const buyPrice = marketPrice * (1 - spread);
//     const balances = await binanceClient.fetchbalance();
//     const assetBalance = balances.free[asset];
//     const baseBalance = balances.free[base];

//     const sellVolume = assetBalance * allocation;
//     const buyVolume = (baseBalance * allocation) / marketPrice;

//     await binanceClient.createLimitSellOrder(market, sellVolume,sellPrice);
//     await binanceClient.createLimitBuyOrder(market, buyVolume, buyPrice);

//     console.log(`
    
//         New tick for ${market}....
//         Create limit sell order for ${sellVolume}@${sellPrice}
//         Create limit buy order for ${buyVolume}@${buyPrice}
//     `)
// }


// const run = () => {

//     const config = {
//         asset: 'BTC',
//         base: 'USDT',
//         allocation: 0.1,
//         spread: 0.02,
//         tickInterval: 2000
//     };
//     const binanceClient = new ccxt.binance({

//         apiKey: process.env.API_ENV,
//         secret: process.env.API_SECRECT

//     });

//     tick(config, binanceClient);
//     setInterval(tick,config.tickInterval,config,binanceClient)
// };





// const crypto = require('crypto');
// const { type } = require('os');
// require('dotenv').config();



// async function getTickerPrice(symbol){

//     try{

//         const priceFetch = await fetch(`https://api.binance.com/v3/ticker/price?symbol=${symbol}`);
//         const pricbody = await priceFetch.json();
//         return parseFloat(pricbody.price);

//     }catch(error){

//         console.error('Error', error);
//         throw error;

//     }
    
    
// }


// async function makeTrade(symbol,price,action,quantity){

//     try{


//         const apiKey= D8GpAqCJhG2BLNvxPYmbvcXcFbnw8wi7Rqptnnomsg40UiSUFM4HKNmGWXph7ZM7;
//         const apiSecret=RHrYpgrQDewrMQLmobt2GGSQSwC0Id8hdKxYGgyiWJNLM7FOtODQ1GOfHcg9Ytcu;    
//         const endpoint ='https://api.binance.com/v3/order';
//         const timestap = Date.now();
//         const params = {
//             symbol,
//             side:action,
//             type:'LIMIT',
//             quantity,
//             price,
//             timestap,
//             timeInForce:'GTC'
//         };
//         let queryString = Object.keys(params).map(key=>`${key}=${encodeURIComponent(params[key])}`).join('&');
//         const signature = crypto.createHmac('sha256', apiSecret)
//         .update(queryString)
//         .digest('hex');


//         queryString+='&signature='+signature;
//         const url = endpoint+'?'+ queryString;
//         const request = await fetch(url,{
//             method:'POST',
//             headers:{
//                 'X-MBX-APIKEY':apiKey,
//                 'Content-Type':'application/x-www-form-urllencoded'
//             }
//         });

//         const respose= await request.json();
//         return respose;


//     }catch(error){

//         console.error('Error', error);
//         throw error;

//     }


// }

// (async()=>{
//     const symbol = 'SHIBUSDT';
//     const price = await getTickerPrice(symbol);
//     const action ='BUY';//SELL
//     const quantity = Math.round(5/price); 
//     const transaction = await makeTrade(symbol,price, action,quantity)
//     console.log(transaction);

// })()


// import Binance from 'binance-api-react-native'


// const client = Binance()

// // Authenticated client, can make signed calls
// const client2 = Binance({
//   apiKey: 'D8GpAqCJhG2BLNvxPYmbvcXcFbnw8wi7Rqptnnomsg40UiSUFM4HKNmGWXph7ZM7',
//   apiSecret: 'RHrYpgrQDewrMQLmobt2GGSQSwC0Id8hdKxYGgyiWJNLM7FOtODQ1GOfHcg9Ytcu',
// })

// client.time().then(time => console.log(time))



const { Spot } = require('@binance/connector')
require("dotenv").config({path: "../.env"});
const Binance = require('node-binance-api');

// const client = new Spot(process.env.binanceApiKey,process.env.binanceSecretKey,{
//     baseURL : 'https://api.binance.com'
// })

const client = new Spot('D8GpAqCJhG2BLNvxPYmbvcXcFbnw8wi7Rqptnnomsg40UiSUFM4HKNmGWXph7ZM7', 'RHrYpgrQDewrMQLmobt2GGSQSwC0Id8hdKxYGgyiWJNLM7FOtODQ1GOfHcg9Ytcu',{ baseURL: 'https://api.binance.com'} )


const binance = new Binance().options({
    APIKEY: 'D8GpAqCJhG2BLNvxPYmbvcXcFbnw8wi7Rqptnnomsg40UiSUFM4HKNmGWXph7ZM7',
    APISECRET: 'RHrYpgrQDewrMQLmobt2GGSQSwC0Id8hdKxYGgyiWJNLM7FOtODQ1GOfHcg9Ytcu'
  });

// Get account information
//client.account().then(response => client.logger.log(response.data))


//ETHUSDT  wise order history
// client.allOrders('BTCUSDT', {
//     orderId: 52
//   }).then(response => client.logger.log(response.data))
//     .catch(error => client.logger.error(error))



//Open Orders
// client.openOrders({ symbol: 'ETHUSDT' })
//   .then(response => client.logger.log(response.data))
//   .catch(error => client.logger.error(error))




// client.newOrder('CHRUSDT', 'BUY', 'LIMIT', {
//     price: '0.2030',
//     quantity: 200,
//     timeInForce: 'GTC'
//   }).then(response => client.logger.log(response.data))
//     .catch(error => client.logger.error(error))


// console.log( binance.futuresMiniTickerStream( 'BTCUSDT', console.log ) );



// binance.prices('BTCUSDT', (error, ticker) => {
//     console.info("Price of BTC: ", ticker.BTCUSDT);
//   });

  binance.websockets.prevDay('BTCUSDT', (error, response) => {
    console.info(response);
  });


console.log('Test');