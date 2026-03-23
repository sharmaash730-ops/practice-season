import Link from "next/link";
import cookies from "next/headers";
//export const dynamic = "force-dynamic";
const Services = async ({ serachparams }) => {
  //const search = await serachparams;
  //console.log(search);
  const mycookies = await cookies();
  console.log(mycookies);
  console.log("Running Services Component");
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link active">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blog" className="nav-link ">
              blog
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Our Services</h1>
        <ul className="services-list">
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>Consulting Services</li>
          <li>Digital Marketing</li>
        </ul>
      </div>
    </>
  );
};

export default Services;
