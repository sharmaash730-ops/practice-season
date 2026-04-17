import Link from "next/link";
export default function bmw(){
    return(
       <> 
        <div className='bmw'>
            <h1>welcome to BMW motors</h1>
            <div className='card'>
                <img src='BMW_G20_(2022).jpg ' width={300} height={200} alt='image'/>
            <a href="https://www.bmw.in/en/all-models/3-series/bmw-3-series-long-wheelbase.html"> <p>BMW 330i</p></a>
            <p>
            <li>engine:2.0L TwinTurbo</li>
            <li>power:250hp</li>
            <li>torque:320NM</li></p>
            </div>{" "}
            <br/>
            <div className='card'>
            <img src='bmw_5_series.jpg ' width={300} height={200} alt='image'/>
            <a href="https://www.bmw.in/en/all-models/5-series/sedan/bmw-5-series-sedan-g68.html"><p>BMW 5 SERIES</p></a>
            <p>
            <li>engine:2.0L TwinTurbo</li>
            <li>power:256hp</li>
            <li>torque:420NM</li></p>
            </div>{" "}
            <br/>
            <div className='card'>
            <img src='bmw_7_series.jpg ' width={300} height={200} alt='image'/>
            <a href="https://www.bmw.in/en/all-models/7-series/7-series-sedan/bmw-7-series-sedan.html"><p>BMW 7 SERIES</p></a>
            <p>
            <li>engine:3.0L Turbo</li>
            <li>power:420hp</li>
            <li>torque:620NM</li></p>
            </div>{" "}
            <br/>
            <div className='card'>
            <img src='bmw-m2.jpg ' width={300} height={200} alt='image'/>
            <a href="https://www.bmw.in/en/all-models/7-series/7-series-sedan/bmw-7-series-sedan.html"><p>BMW M2</p></a>
            <p>
            <li>engine:3.0L TwinTurbo</li>
            <li>power:536hp</li>
            <li>torque:620NM</li></p>
            </div>
        </div>
        <Link href="/"></Link>
        </>
    )
}