import { HomeIcon } from "@sanity/icons";
import Link from "next/link";

export default function Header() {
  return (
    <div className="max-w-[800px] flex justify-between bg-zinc-800 p-2 mt-2 mx-auto rounded-2xl shadow-2xl">
      <HomeIcon className="text-white w-10 h-10" />
      <div className="flex gap-6 text-white my-auto font-medium">
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Service</Link>
        <Link href={"/"}>Careers</Link>
        <Link href={"/"}>Contact</Link>
        <Link href={"/"}>Blogs</Link>
      </div>
      <button className="bg-white px-4 rounded-xl font-medium hover:bg-zinc-200 transition-colors active:bg-zinc-300">
        Login
      </button>
    </div>
  );
}
