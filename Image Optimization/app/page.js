
import "./home.css";
import "./global.css"
import Link from "next/link";

const Home = () => {
    return (
        <div>
            <h1>Home page</h1>
            <p className="bg-amber-400">welcome to our organisation</p>
            <Link href="/about">about Us</Link>{" "}
            <Link href="/blog">Blog</Link>
            <img src="/image22.jpg" alt="" />
        </div>
    );
};
export default Home;