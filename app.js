const http = require('http');
const PORT = 3000;

const days = ["Monday", "Tuesday", "Wednesday"];

const server = http.createServer((req, res) => {
    // handle requests
    console.log('request starting...');
    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>Hello from me!</h1><ul>
    ${days.map((item) => {
        return "<li>" + item + "</li>"
    }).join("")
        } </ul>`);
    res.end();
});

server.listen(PORT, (err) => {
    if (err) return console.log(err);
    console.log(`Server listening on port http://localhost:${PORT}/`)
});