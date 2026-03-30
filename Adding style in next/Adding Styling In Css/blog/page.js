import "./blog.css";
import Link from "next/link";
const Blog = () => {
    return (
        <div>
            <h1>welcome to our blog page</h1>
            <p> this is our blog page where you can see some blogs about our organisation</p>
            <Link href="/">Home</Link>
            <p>
                <Link href="blog1">blog1</Link>
            </p>
            <p>
                <Link href="blog2">blog2</Link>
            </p>
            <p>
                <Link href="blog3">blog3</Link>
            </p>
        </div >
    );
};
export default Blog;