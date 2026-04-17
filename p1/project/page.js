

import Link from 'next/link';

export const metadata={
    title:"AutoMotorWorld"
}
export default function home(){
    return(<>
        <div className="school">
        <h1>AutoMotorWorld</h1>
        <p>which car brand you want to search</p>
        <input className='py-8 px-5' placeholder='cars...' type='search' name="search"></input>
        </div>
        {" "}
        <br/>
        <div className='card'>
        <img src="dodge-logo.jpg " height={250} width={300} alt='image'/>
        <Link href='/dodge'>DODGE MOTORS</Link>
        
        </div>
        <br/>
        <div className='card'>
        <img src='Logo_de_Audi_.jpg' width={250} height={250} content='center' alt='image'/>
        <Link href="/audi" >Audi</Link>
         
        </div> 
        <br/>
        <div className='card'>
            <img src='HD-wallpaper-mercedes-benz-logo-black-background-mercedes-emblem-mercedes-logo-on-a-black-background-car-brands.jpg' height={250} width={300} alt=''/>
            <Link href="/mercedes">MERCEDES-BENZ</Link>
            

        </div>
        <br/>
        <div className='card'>
            <img src="bmw logo.jpg" height={250} width={300} alt=''/>
            <Link href="/bmw">BMW</Link>
            
        </div>
</>
            
    )
}
