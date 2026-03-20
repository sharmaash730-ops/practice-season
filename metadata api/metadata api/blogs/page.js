
import Link from "next/link";
export const metadata = {
    title: 'blogs',
}
export default function blogs() {
    return (<>
        <h1>welcome to our blogs</h1>
        <p>blogs1</p>
        <p>blogs2</p>
        <p>blogs3</p>
        <Link href="/">home</Link>
    </>
    )
}