export default async function files({ params }) {
    const { filepath } = await params;
    return (
        <h1>files/{filepath?.join("/")}</h1>
    )
}