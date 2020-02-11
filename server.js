/* Import Dependencies */
const express = require("express");
const path = require("path");

/* Import Models */

/* Server Constants */
const PORT = process.env.PORT || 3000;

/* Create App */
const app = express();

/* App Setup */
app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json());

/* Serve Static Assets */
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

/* Routes */

/* Direct API calls to React App */
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/"));
});

/* Start Server */
app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
});

module.exports = app;