import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="bg-slate-900 text-white flex py-4 justify-between px-8">
      <Link href={"/"} className="font-bold text-2xl text-blue-400">
        Mobile hut
      </Link>
      <ul className="gap-x-5 flex font-semibold text-xl">
        <Link className=" hover:text-blue-500" href="/">
          Home
        </Link>
        <Link className=" hover:text-blue-500" href="/product">
          Product
        </Link>
        <Link className=" hover:text-blue-500" href="/about">
          About
        </Link>
        <Link className=" hover:text-blue-500" href="/contact">
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
