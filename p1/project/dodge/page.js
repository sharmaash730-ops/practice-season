import Link from "next/link";

export default function dodge(){
    return(
        <>
         <div className="dodge">
            <h1>welcome to DODGE MOTORS</h1>
            <div className='card'>
            <img src='dodge-challenger-srt-hellcat-.jpeg ' width={300} height={200} alt='image'/>
            <a href="https://www.dodge.com/challenger/srt.html"><p>Dodge Challenger Srt Hellcat</p></a>
           <p>
            <li>engine:6.2L Hemi v8</li>
            <li>power:800hp</li>
            <li>torque:1000NM</li></p>
            <br/>
            </div>{" "}
            <div className='card'>
            <img src='2026-Dodge-charger.jpg ' width={300} height={200} alt='image'/>
            <a href="https://www.dodge.com/charger.html"><p>Dodge Charger</p></a>
            <p>
            <li>engine:6.2 Hemi v8 supercharged</li>
            <li>power:620hp</li>
            <li>torque:800NM</li></p>
            </div>{" "}
            <br/>
            <div className='card'>
            <img src='2019_dodge_durango.jpg ' width={300} height={200} alt='image'/>
            <a href="https://www.dodge.com/durango.html"><p>Dodge Charger</p></a>
            <p>
            <li>engine:6.2L Hemi V8</li>
            <li>power:750hp</li>
            <li>torque:920NM</li></p>
            </div>{" "}
            <br/>
            <div className='card'>
            <img src='Dodge_RAM_truck.jpg ' width={300} height={200} alt='image'/>
            <a href="https://www.ramtrucks.com/"><p>Dodge RAM truck</p></a>
            <p>
            <li>engine:3.0L v6 ECOBOOST</li>
            <li>power:335hp</li>
            <li>torque:520NM</li></p>
            </div>
        </div>
        <Link href='/'>home</Link>
        </>
    )
}