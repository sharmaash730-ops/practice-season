"use client"
import { useEffect, useState } from "react";
const posts = () => {
    const [posts, setposts] = useState([]);
    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts?_limit=5"
            );
            const data = await response.json();
            setposts(data);
        }
        fetchPosts();
    }, []);

    return (
        <>
            <h1>posts</h1>
            <div className="posts-container">
                {
                    posts.map(({ id, title, body }) => (
                        <div className="post-card" key={id}>
                            <h2>{title}</h2>
                            <p>{body}</p>
                        </div>
                    ))
                }
            </div>

        </>
    );
};
export default posts;