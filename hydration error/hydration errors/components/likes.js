"use client"
import { useState } from "react";
export default function Likes() {
    const [LikesCount, setLikesCount] = useState(0);

    console.log("Like component");
    return <div
        onClick={() => {
            setLikesCount((prev) => prev + 1);
        }}
    >
        {LikesCount} likes
    </div>
}

