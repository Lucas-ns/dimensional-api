const express = require('express')
const app = express()


app.get("/", (req, res) => {
    res.send("Hello World! Teste!");
})

app.listen(3000, () => {
    console.log("Express running at http://localhost:3000");
});
