import todosData from "../../todos.json";
export function GET() {
    console.log("running route handler");
    return new Response(JSON.stringify(todosData),
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
}