export const metadata = {
    title: "about",
}
import Link from "next/link";
export default function about() {
    return (<>
        <h1>about</h1>
        <Link href="/">Home</Link>
    </>
    );
}