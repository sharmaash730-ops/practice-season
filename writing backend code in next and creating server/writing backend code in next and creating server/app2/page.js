
import http from "http";

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end("hello from new next.js server.")
});
server.listen(4000, () => {
    console.log('server started')
})
function Home() {
    return (
        <><h1>home page</h1></>
    )
}
export default Home;