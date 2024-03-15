"use client";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation"; // Import useRouter hook
const Footer = () => {
  const router = usePathname(); // Get the current route

  const user = router.split("/")[1];
  return (
    <>
      {user === "user" || user == "admin" ? (
        <div></div>
      ) : (
        <div>
          <footer className="flexCenter mt-5 mb-24">
            <div className="padding-container max-container flex w-full flex-col gap-14">
              <div className="border bg-gray-20" />
              <p className="regular-14 w-full text-center text-gray-30">
                2024 สมาคมทางหลวง | All rights reserved
              </p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
