import Link from "next/link";
export default function home() {
  return (
    <>
      <h1>welcome to technical world</h1>
      <Link href="/services">services</Link>{" "}
      <Link href="/blogs">blogs</Link>

    </>
  );
}