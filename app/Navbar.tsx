import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="">
            <div className="">
                <ul className="flex flex-row  justify-between p-2">
                    <li>
                    <Link href={"/"}>home</Link></li>
                
                    <li>
                    <Link href={"/products"}>products</Link></li>
                
                    <li>
                        <Link href={"/contact"}>contact</Link></li>
                    <li>
                    <Link href={"/checkout"}>checkout</Link></li>
                </ul>
            </div>
        </nav>
    )
}