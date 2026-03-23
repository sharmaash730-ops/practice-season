import link from "next/link";
export async function generateStaticParams() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await response.json()
    return data.map(({ id }) => ({ blogID: '$ {id}' }));
}
const blog = async ({ params }) => {
    const { blogID } = await params;
    return (<>
        <h1>blog{blogID}</h1>
    </>);
}


