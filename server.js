const express = require("express") // Importing Express
const app = express() // Creating Express Server
const host = "0.0.0.0" // Specifying Host
const port = 3000 // Specifying Port number
// Creating Http Server from Express App to work with socket.io
const http = require("http").Server(app);
// Initializing socket.io object
const socketio = require("socket.io")


let io = socketio(http, {
    // Specifying CORS 
    cors: {
        origin: "*",
    }
});

app.use(express.urlencoded({ extended: true })) // Specifying to use urlencoded


//var mensaxes = [];

// Creating object of Socket
const liveData = io.of("/liveData") // URL which will accept socket connection
// Socket event
liveData.on("user-connected", (username) => {
    console.log(`Receiver ${username} connected..`) // Logging when user is connected
});
// Get request on home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Post request on home page
app.post('/', (req, res) => {
    console.log(req.body);
    let m = req.body;
    m.timestamp = new Date();
    //mensaxes.push(m);
    liveData.emit("new-data", m); // Emitting event.
    res.send("ok");
})



// Listening on Host and Port
http.listen(port, host, () => console.log(`Listening on http://${host}:${port}/`))


