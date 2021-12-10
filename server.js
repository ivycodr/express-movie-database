// requires app, listens on port
const { app, port } = require('./app.js');


// requires app and port to listen on the port sepecified

app.listen(port, function() {
  console.log(`app listening on port ${port}!`)
});

