const server = require("./src/app.js");
const functions = require("firebase-functions")
const dotenv = require("dotenv")
const { conn } = require("./src/db.js");
const { test } = require("./src/Routes/test/controllers.js");

dotenv.config()


conn.sync({ force: true }).then(async () => {
  await test();
  server.listen(process.env.DB_PORT, () => {
    console.log(`Server listening at ${process.env.DB_PORT}`);
  });
});

exports.api = functions.https.onRequest(server)


