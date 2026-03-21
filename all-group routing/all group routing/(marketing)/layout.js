export default function layout({ children }) {
    return (
        <>
            <header style={{ background: "pink", color: "white" }}>marketing</header>
            {children}
            <footer style={{ background: "magenta", color: "white" }}>support</footer>
        </>
    )
}