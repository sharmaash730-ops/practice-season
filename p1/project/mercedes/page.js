import Link from "next/link";

export default function mercedes(){
    return(
        <>
       
        
        <div className='mercedes'>
            <h1>welcome to mercedes</h1>
            <div className='card'>
            <img src='mercdese_s_580.jpeg ' width={300} height={200} alt='image'/>
            <a href="https://www.mercedes-benz.co.in/passengercars/models/saloon-long/mercedes-maybach-s-class/overview.html"><p>MERCEDES S 580</p></a>
            <p>
            <li>engine:3.0L inline-6</li>
            <li>power:375hp</li>
            <li>torque:520NM</li></p>

            </div>
            <br/>
            {" "}
            <div className='card'>
            <img src='mercedes-benz-e450-4matic-2024.jpeg' width={300} height={200} alt='image'/>
            <a href="https://www.mercedes-benz.co.in/passengercars/buy/new-car/product.html/V214_0582584576_IN_2330816"><p>MERCEDES E 450</p></a>
            <p>
            <li>engine:3.0L inline-6</li>
            <li>power:335hp</li>
            <li>torque:420NM</li></p>

            </div>
            <br/>
            {" "}
            <div className='card'>
            <img src='2021_mercedes-benz_s-class_local-3.jpg' width={300} height={200} alt='image'/>
            <a href="https://www.mercedes-benz.co.in/passengercars/models/saloon-long/s-class/overview.html"><p>MERCEDES S CLASS</p></a>
            <p>
            <li>engine:6.0L v12Tfsi</li>
            <li>power:620hp</li>
            <li>torque:800NM</li></p>

            </div>
            <br/>
            {" "}
            <div className='card'>
            <img src='MERCEDES_GLS_600.jpeg' width={300} height={200} alt='image'/>
            <a href="https://www.mercedes-benz.co.in/passengercars/models/suv/mercedes-maybach-gls/overview.html"> <p>MERCEDES GLS 600</p></a>
           <p>
            <li>engine:4.0L v8 Tfsi</li>
            <li>power:520hp</li>
            <li>torque:700NM</li></p>

            </div>
        </div>
        <Link href="/"></Link>
        </>
    )
}