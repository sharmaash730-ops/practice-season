import Link from "next/link";

export default function home() {
  return (
    <>
      <h1>welcome to technical world</h1>
      <p>
        <Link href="/services">services</Link>{"  "}
      </p>
      <p>
        <Link href="/blogs">blogs</Link>{"  "}
      </p>
      <p>
        <Link href="/about">about</Link>{" "}
      </p>
      <p>
        <Link href="/files">files</Link>
      </p>

    </>
  );
}