export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "red" }}>technical world</header>
        {children}
        <footer style={{ backgroundColor: "blue" }}>help</footer>
      </body>
    </html>
  );
}
