export default async function blog({ params }) {
    const { blogID } = await params;
    return (<>
        <h1>blog{blogID}</h1>
    </>)
}