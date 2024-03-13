"use client";
import { NAV_LINKS } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import LoginButton from "@/app/LoginButton";
import Sidebar, { SidebarItem } from "./Users/Sidebar";
import { usePathname } from "next/navigation"; // Import useRouter hook
import { FaAddressBook } from "react-icons/fa";
const Navbar = ({ children }) => {
  const router = usePathname(); // Get the current route

  const user = router.split("/")[1];

  return (
    <>
      {user === "user" ? (
        <Sidebar children={children} />
      ) : (
        <>
          <nav
            style={{ background: "#FF9900" }}
            className="max-container2 flexBetween padding-container relative z-30 w-full py-5"
          >
            <Link href="/"></Link>

            <ul className="hidden h-full gap-28 lg:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="regular-16 text-white 
                  flexCenter cursor-pointer
                   pb-1.5 transition-all hover:scale-125 hover:text-cyan-900"
                >
                  {link.label}
                </Link>
              ))}
            </ul>

            <div className="lg:flexCenter hidden mr-5">
              <LoginButton />
            </div>

            <Image
              src="menu.svg"
              alt="menu"
              width={32}
              height={32}
              className="inline-block cursor-pointer lg:hidden"
            />
          </nav>
          {children}
        </>
      )}
    </>
  );
};

export default Navbar;
