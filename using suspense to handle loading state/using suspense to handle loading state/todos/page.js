const { default: SlowComponent2s } = require("@/components/SlowComponent2s")
const { default: SlowComponent3s } = require("@/components/SlowComponent3s")
const { default: Todositems } = require("@/components/Todositems")
const { Suspense } = require("react")

const todos = async () => {
    return (
        <>
            <h1>Todos</h1>
            <Suspense fallback={
                <div className="todos-container">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <li key={index} className="shrimmer">
                            <div className="shrimmer-checkbox"></div>
                            <div className="shrimmer-text"></div>
                        </li>
                    ))}
                </div>
            }
            >
                <Todositems />
            </Suspense>
            <Suspense fallback={<div> loading data1</div>}>
                <SlowComponent2s />
            </Suspense>
            <Suspense fallback={<div> loading data2</div>}>
                <SlowComponent3s />
            </Suspense>
        </>
    );
};
export default todos;