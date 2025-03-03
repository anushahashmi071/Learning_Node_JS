const http = require("http")
const server = http.createServer((request, response) => {

    response.writeHead(200, {
        "content-type": "text/html"
    })
    response.end("<h1>hi</h1>")

})

const PORT = process.env.PORT
server.listen(PORT, (() => {
    console.log(`Server is running on ${PORT}`);
}))