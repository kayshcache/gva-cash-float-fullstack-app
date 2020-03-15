import redis from 'redis';
import request from 'request';

require('dotenv').config();

export default function connectRedis() {
  const redisClient = redis.createClient({
    host: `${process.env.REDIS_HOST}.redislabs.com`,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
  });

  redisClient.on('connect', () => {
    console.time('redis');
    console.log('Connected to Redis Enterprise Cloud');

    fetchFromAPI((err, data) => {
      insertRedis(redisClient, data.bpi, (err, results) => {
	if (err) throw err;
	console.log(`Successfully inserted ${results} in REC`);
	redisClient.zrange('values', -1, -1, 'withscores', (err, results) => {
	  if (err) throw err;
	  console.log(`Redis: the one month max value is ${results[1]} and it was reached on ${results[0]}`);
	  console.timeEnd('redis');
	  // Set flush to true
	  redisClient.end(true);
	});
      });
    });
  });

  function insertRedis(client, data, callback) {
    const values = ['values'];

    Object.keys(data).map(key => {
      values.push(data[key]);
      values.push(key);
    });
    client.zadd(values, callback);
  }

  function fetchFromAPI(callback) {
    request.get('https://api.coindesk.com/v1/bpi/historical/close.json', (err, raw, body) => {
      return callback(err, JSON.parse(body));
    });
  }
}

/*
export default class RedisClient {
  constructor() {
  }
}
*/
