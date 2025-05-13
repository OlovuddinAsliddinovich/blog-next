import { GraduationCap } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] z-30 fixed w-full h-[100px]">
      <div className="bg-transparent z-20 flex items-center h-full justify-between container mx-auto">
        <Link href={"/"} className="text-3xl flex items-center gap-2 font-bold">
          <GraduationCap className="w-8 h-8" />
          Blog
        </Link>

        <ul className="flex items-center justify-between gap-6 text-xl">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/create-blog">Create Blog</Link>
          </li>
          <div className="flex items-center gap-4">
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
