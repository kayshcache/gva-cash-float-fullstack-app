import redis from 'redis';

function insertRedis(client, data, callback) {
  const values = ['values'];

  Object.keys(data).map(key => {
    values.push(data[key]);
    values.push(key);
  });
  client.zadd(values, callback);
}

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
});
