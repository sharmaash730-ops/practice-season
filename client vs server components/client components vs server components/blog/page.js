"use client"
import Views from "@/components/views";
import Likes from "@/components/likes";
import Comments from "@/components/comments";
import Link from "next/link";
import { Suspense } from "react";

const blog = () => {
    return (
        <>
            <nav>
                <ul className="navbar">
                    <li>
                        <Link href="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="nav-link">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" className="nav-link ">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="nav-link active">
                            blog
                        </Link>
                    </li>
                </ul>
            </nav>
            <div>
                <h1>Our blogs</h1>
                <ul className="blog">
                    <li>blog1</li>
                    <li>blog2</li>
                    <li>blog3</li>
                    <li>blog4</li>

                </ul>
            </div>
            <div>

                < br />

                < Likes />
                < Views />
                < Comments />




            </div>

        </>
    );
};

export default blog;
