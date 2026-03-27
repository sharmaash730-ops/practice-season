const todos = async () => {
    const [todoresponse, slowresponse2s, slowersponse3s] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=5"),
        fetch("https://procodrr.vercel.app/?sleep=2000"),
        fetch("https://procodrr.vercel.app/?sleep=3000"),
    ]);
    const [todos, data1, data2] = await Promise.all([todoresponse.json(), slowresponse2s.json(), slowersponse3s.json(),])
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