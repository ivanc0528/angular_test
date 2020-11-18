const express = require('express');

const app = express();

app.use(express.static('./ang-test'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'ang-test/'}),
);

app.listen(process.env.PORT || 8080);
