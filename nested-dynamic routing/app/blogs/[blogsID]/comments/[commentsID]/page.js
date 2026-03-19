

export default async function comments({ params }) {
    const paramsObj = await params;
    const { commentsID, blogsID } = paramsObj;
    console.log(paramsObj);
    return (
        <div>comments no. <b>{commentsID}</b>page on{blogsID} </div>
    );
}