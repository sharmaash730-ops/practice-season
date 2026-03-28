"use client"
export default function GlobalError() {
    return (
        <html lang="en" className="dark">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body>
                <div>
                    <p>somethhing went wrong in Root Layout</p>
                    <button onClick={() => {
                        window.location.reload();
                    }}> TRY AGAIN</button>
                </div>

            </body>
        </html>


    );
};

