import { navItems } from "@/constants";
import Link from "next/link";
import React from "react";

const NavItems = () => {
  return (
    <ul className="flex flex-col gap-10 md:flex-row">
      {navItems.map((link) => (
        <li key={link.label} className="text-xl">
          <Link href={link.path}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
