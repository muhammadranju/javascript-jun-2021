const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Node js form get')
})
app.post('/', (req, res) => {
    res.send('Hello Node js form post')
})

app.listen(4000, () => {
    console.log('app is running');
})