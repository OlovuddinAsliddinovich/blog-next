import { GraduationCap } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="mx-auto container py-[50px] flex justify-between">
        <Link href={"/"} className="text-3xl flex items-center gap-2 font-bold">
          <GraduationCap className="w-8 h-8" />
          Blog
        </Link>

        <div>
          <ul className="flex items-center whitespace-nowrap gap-4">
            <li className="cursor-pointer hover:text-blue-500 transition-all duration-200 ease-linear">
              Telegram
            </li>
            <li className="cursor-pointer hover:text-blue-500 transition-all duration-200 ease-linear">
              Instagram
            </li>
            <li className="cursor-pointer hover:text-blue-500 transition-all duration-200 ease-linear">
              Facebook
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-full border border-gray-500" />
      <div className="flex items-center justify-center flex-col py-4">
        &copy; All reserved {new Date().getFullYear()}{" "}
        <h1 className="text-xl">Ramiddinov Olovuddin</h1>{" "}
      </div>
    </div>
  );
};

export default Footer;
