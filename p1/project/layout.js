import Navbar from "../components/Navbar"
import "./global.css"
export default function rootlayout({children}){
    return(
        <html>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    )
}
