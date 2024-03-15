"use client";
import { NAV_LINKS } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import LoginButton from "@/app/LoginButton";
import Sidebar, { SidebarItem } from "./Users/Sidebar";
import SideNavbarAdmin from "./Admin/SideNavbarAdmin";
import { usePathname } from "next/navigation"; // Import useRouter hook
import { FaAddressBook } from "react-icons/fa";
const Navbar = ({ children }) => {
  const router = usePathname(); // Get the current route

  const user = router.split("/")[1];

  return (
    <>
      {user === "user" ? (
        <Sidebar children={children} />
      ) : user === "admin" ? (
        <SideNavbarAdmin children={children} />
      ) : (
        <>
          <nav className="max-container2 bg-gradient-to-l from-[#77A8D8]  to-[#295F93] flexBetween padding-container relative z-30 w-full">
            <Link href="/">
              <img src="/LOGO-FINAL.png" className="w-28" alt="" />
            </Link>

            <ul className="hidden h-full gap-10 lg:flex">
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
