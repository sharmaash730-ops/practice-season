export async function generatemetadata({ params }) {
    const { blogID } = await params;
    return {
        title: 'blog ${blogID}',
    };
}
export default async function blogs({ params }) {
    const { blogID } = await params;
    return <div>blog {blogID}</div>;
}