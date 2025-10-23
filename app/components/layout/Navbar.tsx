import Link from "next/link";
import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className="mx-auto p-5 w-full">
      <div className="flex flex-col items-center p-4 text-2xl">
        {/* Logo */}
        <div className="mb-4">
          <Link href={"/"}>
            <Image src="/LA_Logo_Clean_White.png" alt="Logo" width={250} height={250} />
          </Link>
        </div>
        {/* Navigation Links */}
        <ul className="flex flex-row gap-6 justify-center">
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href={"/about"}>About</Link></li>
          <li><Link href={"/music"}>Music</Link></li>
          <li><Link href={"/shows"}>Shows</Link></li>
          <li><Link href={"/products"}>Merch</Link></li>
          <li><Link href={"/gallery"}>Gallery</Link></li>
          <li><Link href={"/contact"}>Contact</Link></li>
          {/* create cart link but have a cart icon downloaded from online */}
          <li>
            <Link href={"/cart"}>
              <Image src="/cart-icon-white.png" alt="Cart" width={30} height={30} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
