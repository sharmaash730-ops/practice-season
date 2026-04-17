import Link from 'next/link';
const Navbar=()=>{
    return(
        <nav style={{display:'flex',gap:'20px',padding:'2rem',background:'red',color:'#fff',}}>
           <li><Link href="/">Home</Link></li>
           <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/services">Services</Link></li>
        </nav>
    )
}
export default Navbar;