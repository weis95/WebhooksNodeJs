const express = require('express');
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const WebHook = require('./webhook');

router.post('/', function (req, res) {
    WebHook.create({
        url: req.body.url,
        token: req.body.token
    }, 
    function (err, webhook) {
        if (err) return res.status(500).send("There was a problem adding the Webhook to the database.");
        res.status(200).send(webhook);
    });
});

router.get('/', function (req, res) {
    WebHook.find({}, function (err, webhook) {
        if (err) return res.status(500).send("There was a problem finding the WebHooks.");
        res.status(200).send(webhook);
    });
});


module.exports = router;