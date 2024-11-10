const tika = require('tika-server');

tika.createServer().then((server) => {
  server.listen(9998, () => {
    console.log('Tika server started on port 9998');
  });
});
