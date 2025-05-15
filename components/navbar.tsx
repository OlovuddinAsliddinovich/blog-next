import ActiveLink from "@/app/components/active-link";
import { GraduationCap } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-[rgba(59,99,234,0.8)] z-30 text-white fixed w-full h-[100px]">
      <div className="bg-transparent z-20 flex items-center h-full justify-between container mx-auto">
        <Link href={"/"} className="text-3xl flex items-center gap-2 font-bold">
          <GraduationCap className="w-8 h-8" />
          Blog
        </Link>

        <ul className="flex items-center justify-between gap-6 text-xl">
          <li>
            <ActiveLink href="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/blogs">Blogs</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/create-blog">Create Blog</ActiveLink>
          </li>
          <div className="flex items-center gap-4">
            <ActiveLink href="/login">Sign In</ActiveLink>
            <ActiveLink href="/register">Sign Up</ActiveLink>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
