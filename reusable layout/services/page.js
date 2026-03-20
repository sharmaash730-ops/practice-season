import Link from "next/link";
export default function services() {
    return (
        <>
            <p>web dev department</p>
            <Link href="/services/webdev">web dev</Link>
            {" "}
            <p>app dev department</p>
            <Link href="/services/appdev">app dev</Link>
        </>
    )
}