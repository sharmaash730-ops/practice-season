const blog = async ({ params }) => {
    const { blogId } = await params;
    return (
        <div>
            <p>this is our {blogId} page.</p>
            <p>this page is not available in our server.</p>
        </div>
    );
};
export default blog;