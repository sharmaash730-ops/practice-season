async function fetchdata(url) {
    const response = await fetch(url);
    return await response.json();
}
const urls = [
    ("https://jsonplaceholder.typicode.com/todos?_limit=5"),
    ("https://procodrr.vercel.app/?sleep=2000"),
    ("https://procodrr.vercel.app/?sleep=3000"),
];
const todos = async () => {
    const [todos, data1, data2] = await Promise.all(
        urls.map((url) => fetchdata(url))
    );
    return (
        <>
            <h1>Todos</h1>

            <div className="todo-container">
                {todos.map(({ id, title, completed }) => (
                    <div className="todo-item" key={id}>
                        <input type="checkbox" checked={completed} readOnly />
                        <p>{title}</p>
                    </div>
                ))}
            </div>
            <div>{JSON.stringify(data1)}</div>
            <div>{JSON.stringify(data2)}</div>

        </>
    );

};
export default todos;