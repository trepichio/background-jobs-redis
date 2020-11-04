import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
import Queue from 'bull';
import redisConfig from '../../config/redis.js';

import * as jobs from '../jobs/index.js';

Sentry.init({
  dsn: process.env.SENTRY_QUEUE_DSN,

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});


const queues = Object.values(jobs).map(job => ({
  bull: new Queue(job.key, redisConfig),
  name: job.key,
  handle: job.handle,
  options: job.options
}))

export default {
  queues,
  add(name, data) {
    const queue = this.queues.find(queue => queue.name === name)

    return queue.bull.add(data, queue.options)
  },
  process() {
    return this.queues.forEach(queue => {
      queue.bull.process(queue.handle)

      queue.bull.on('failed', (job, err) => {
        delete job.data.user.password
        console.log('Job failed', queue.key, job.data);
        console.log(err);
        Sentry.captureException(err);
      })
    })
  }
};