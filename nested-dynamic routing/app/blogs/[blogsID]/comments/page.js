export default async function comments({ params }) {
    const paramsObj = await params;
    const { blogID } = paramsObj;
    console.log(paramsObj);
    return <div>all comments on {blogID}page</div>
}