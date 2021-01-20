const Queue = require('bull');
const subscribeEventJob = require('./job');


const subscribeEventQueue = new Queue('subscribe_event', process.env.REDIS_URL);

subscribeEventQueue.process(subscribeEventJob);

module.exports = subscribeEventQueue;
