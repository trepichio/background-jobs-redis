import 'dotenv/config.js';
import express from 'express'
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
import BullBoard from 'bull-board';

import UserController from './app/controllers/UserController.js';
import Queue from './app/lib/Queue.js';

const app = express()

Sentry.init({
  dsn: process.env.SENTRY_SERVER_DSN,
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

BullBoard.setQueues(Queue.queues.map(queue => queue.bull))

app.use(express.json())

app.get('/', async function rootHandler(req, res) {
  return res.send("Hello world!")
})

app.post('/users', UserController.store)

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

app.use('/admin/queues', BullBoard.UI)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
})