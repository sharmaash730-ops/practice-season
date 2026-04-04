import http from 'http'
import connectDB from './db.js'

const server = http.createServer((req, res) => {
    res.end("done")
})
const PORT = 3000
server.listen(PORT, () => {
    connectDB()
    console.log(`serveris listen at http://localhost: ${PORT}`);
})