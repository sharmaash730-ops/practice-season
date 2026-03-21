export default function layout({ children }) {
    return (
        <>
            <header style={{ background: "violet", color: "white" }}>application</header>
            {children}
            <footer style={{ background: "purple", color: "cherry" }}>support</footer>
        </>
    )
}