export function GET() {
    console.log("running route handler");
    return new Response(JSON.stringify({ message: "hello world" }),
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
}