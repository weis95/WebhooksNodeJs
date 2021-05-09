const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.post("/", function (req, res) {
  let payload = req.body;
  /* Should be changed to actual place where we store webhooks */
  const url = "http://localhost:9876/api/webhooks/";

  fetch(url, { method: "GET" })
    .then((res) => res.json())
    .then(async (json) => {
        for (const element of json) {

            const elementPath = element.url
            const token = element.token
            payload = { token, ...payload }

            try {
                await fetch(elementPath, {
                    method: "POST",
                    body: JSON.stringify(payload),
                    headers: { "Content-Type": "application/json" },
                });

            } catch (error) {
                res.send(elementPath + "failed to execute");
                /* I guess we will stop the function if something fails? */
                return false;
            }
        }

        res.send("Webhooks executed successfully");
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
