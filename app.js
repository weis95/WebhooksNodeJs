const express = require('express');
const app = express();
const db = require('./db');
const WebhookController = require('./webhooks/webhookController');
const WebhookCaller = require('./webhooks/webhookCaller');

app.use('/api/webhooks', WebhookController);
app.use('/api/webhooks/test', WebhookCaller);
module.exports = app;