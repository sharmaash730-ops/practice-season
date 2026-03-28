
import Header from "@/components/Header";



export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
            <body>

                <Header />
                {children}

            </body>
        </html>
    );
}
