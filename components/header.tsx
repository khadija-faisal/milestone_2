"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
function Header() {
  const [isClick, setisClick] = useState(false);

  const toggleNav = (): void => {
    setisClick(!isClick);
  };
  return (
    <div>
      <div className=" flex justify-between pb-6 items-center h-[30px] w-screen bg-[#0d0d0d] px-10 py-7  ">
        <Link href={"/"}>
          {" "}
          <div className=" ml-3 border w-5 h-5 animate-spin-slow "></div>
        </Link>

        <div className=" flex items-center">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500
      "
            onClick={toggleNav}
          >
            {isClick ? (
              <Image
                src={"/xmark-solid.svg"}
                alt="menu"
                width={20}
                height={20}
              />
            ) : (
              <Image
                src={"/bars-solid.svg"}
                alt="menu"
                width={20}
                height={20}
              />
            )}
          </button>
        </div>
      </div>
      {isClick && (
        <div>
          <div className="px-2 bg-[#0d0d0d] pt-2 pb-5 space-y-1 sm:px-3">
            <ul className=" flex flex-col items-center p-3 bg-[#0d0d0d] text-slate-300 gap-5 border-b border-b-gray-900">
              <li className="hover:text-fuchsia-700 hover:underline">
                <Link href="/home">Home</Link>
              </li>
              <li className="hover:text-fuchsia-700 hover:underline">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:text-fuchsia-700 hover:underline">
                <Link href="/project">Project</Link>
              </li>
              <li className="hover:text-fuchsia-700 hover:underline">
                <Link href="/contact ">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
