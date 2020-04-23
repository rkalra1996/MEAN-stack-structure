const app = require('express')();


app.get('/api/v1/users', (req,res) => {
    console.log('recieved request from some client / server ', req.ip);
    res.status(200).send({status: 200, response: 'Server acknowledged'});
});

app.listen(3200, () => {
    console.log('listening on port ', 3200);
});