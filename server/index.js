import { createServer } from "http"
const server = createServer((request, response) => {

    response.writeHead(200, {
        "content-type": "text/plain"
    })
    response.end("Serve is Working")

})

const PORT = 3000
server.listen(PORT, (() => {
    console.log(`Server is running on ${PORT}`);
}))