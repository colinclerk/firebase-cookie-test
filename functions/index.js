const functions = require("firebase-functions");

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.cookie("__session", "FakeSessionToken");
  response.cookie("foo", "bar");
  if (request.get("Cookie")) {
    response.send(request.get("Cookie"));
  } else {
    response.send(
      "No cookies came with the request. We just responded with 2 Set-Cookies (__session and foo).  Refresh to see them."
    );
  }
});
