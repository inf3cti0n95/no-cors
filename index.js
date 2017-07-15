const express = require("express");
const cors = require("cors");
const app = express();
const request =  require("request");

const PORT = process.env.PORT || 8000;

app.use(cors());

app.get("/", (req, resp) => {
    let { url } = req.query;
    request.get(url, (err, response, body)=> {
        resp.send(body);
        console.log("Served Response from", url)
    })
})

app.listen(PORT, () => {
    console.log("Listning on Port", PORT);
});