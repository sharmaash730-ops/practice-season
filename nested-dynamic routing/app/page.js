import Link from "next/link";
export default function home() {
  return (
    <>
      <h1>welcom to technical world</h1>
      <Link href="/about">about</Link>{" "}
      <Link href="/blogs">blogs</Link>
    </>
  );
}