export default async function Todositems() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
    const Todos = await response.json();
    return (
        <div className="todos-container">
            {Todos.map(({ id, title, completed }) => (
                <div className="todo-item" key={id}>
                    <input type="checkbox" checked={completed} readOnly />
                    <p>{title}</p>
                </div>
            ))}

        </div>
    )
}