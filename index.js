const app = require('express')();

app.get('/health-check', (req, res) => res.sendStatus(200));
app.get('/check', (req, res) => {
    res.send({test: true});
    //res.sendStatus(200);
});

app.listen(8080);