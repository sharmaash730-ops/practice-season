"use client";
export default function Comments() {
    if (typeof window === "undefined") {
        return <div> 500 comments we are a company dedicated to our organisation</div>;
    }
    return <div>500 comments client</div>;
} 
