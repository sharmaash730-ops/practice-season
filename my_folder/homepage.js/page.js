import Link from "next/link";
export default function home() {
    return (
        <>
            <h1>welcome to technical agency</h1>
            <Link href="/about">ABOUT</Link>{" "}<Link href="/services">SERVICES</Link>
        </>
    );
}