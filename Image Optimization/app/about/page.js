import Link from "next/link";
const about = () => {
    return (
        <div>
            <h1>this is our about page</h1>
            <p>this is our informal page about our organisation</p>
            <Link href="/">home</Link>
        </div>
    );
};
export default about;