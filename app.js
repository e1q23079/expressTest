// Expressを利用
const express = require('express');
// ポート番号を指定
const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    res.json('test');
});


app.listen(port, () => {
    console.log("Server is running!!");
});