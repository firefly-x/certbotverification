const app = require('express')();

app.get('/health-check', (req, res) => res.sendStatus(200));
app.get('/check', (req, res) => {
    res.send({test: ok});
    //res.sendStatus(200);
});

app.listen(8080);