import todosData from "../../../todos";
export function GET(_, context) {
    console.log(context);
    return Response.json(todosData[0]);
}