import "./home.css";
import Link from "next/link";

const Home = () => {
    return (
        <div>
            <h1>Home page</h1>
            <p>welcome to our organisation</p>
            <Link href="/about">about Us</Link>{" "}
            <Link href="/blog">Blog</Link>
        </div>
    );
};
export default Home;