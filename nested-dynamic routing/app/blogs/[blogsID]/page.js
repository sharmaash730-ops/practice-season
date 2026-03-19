export default async function blog({ params }) {
    const { blogID } = await (params);
    return <div>blog{blogID}</div>;
}