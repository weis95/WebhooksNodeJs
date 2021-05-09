const app = require('./app');
const port = process.env.PORT || 9876;
const server = app.listen(port, function() {
    console.log('Express server listening in port ' + port);
});
module.exports = server
