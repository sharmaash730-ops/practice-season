import Link from "next/link";
export const dynamicParams = false;
//ISR
//export const revalidate = 5;
//SSG(server side generation)
//export async function generateStaticParams() {
// const response = await fetch("https://jsonplaceholder.typicode.com/todos")
//  const data = await response.json();
//return data.map(({ id }) => ({ blogID: '$ {id}' }));
//}

const blog = async ({ params }) => {
    const { blogID } = await params;
    return (<>
        <h1>blog:{blogID}</h1>
    </>);
}
<>  <Link href="/blog">blogs</Link>
    <h1>welcome to our blog{blogID}</h1>
    <h2> date:{new date().tolocalestring()}</h2>
    <p>his is our blog{blogID}page.</p>
</>



