export default function loading() {
    return (
        <>
            <h1>Todos</h1>
            <div className="todos-container">
                {Array.from({ length: 5 }).map((_, index) => (
                    <li key={index} className="shrimmer">
                        <div className="shrimmer-checkbox"></div>
                        <div className="shrimmer-text"></div>
                    </li>
                ))}
            </div>
        </>
    )
}