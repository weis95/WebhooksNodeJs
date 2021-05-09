After cloning this repo:

Then run:

$ npm i

__________

Add db.js to src folder, connect to mongodb.

__________

To start server:

$ node server

__________

GET to see all webhooks, not descriped in challenge, but I used it to fetch all data.
http://localhost:9876/api/webhooks/

POST url and token here
http://localhost:9876/api/webhooks/

POST payload here
http://localhost:9876/api/webhooks/test

__________

Limitations:

No encryption
Error handling stops execution
Only POST & GET funcitonality
http://localhost:9876/api/webhooks/test only supports certain json structure
No tests written