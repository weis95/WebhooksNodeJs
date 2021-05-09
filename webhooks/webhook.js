const mongoose = require('mongoose');

const WebHookSchema = new mongoose.Schema({  
    url: String,
    token: String,
});

mongoose.model('WebHook', WebHookSchema);
module.exports = mongoose.model('WebHook');
