import { ArrowRightIcon, HomeIcon } from "@sanity/icons";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full sticky top-0 bg-zinc-800 p-2 shadow-xl">
      <div className="max-w-[800px] h-full flex items-center justify-between mx-auto">
        <HomeIcon className="text-white w-10 h-10" />
        <div className="flex gap-6 text-white my-auto font-medium max-[768px]:hidden">
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Service</Link>
          <Link href={"/"}>Careers</Link>
          <Link href={"/"}>Contact</Link>
          <Link href={"/"}>Blogs</Link>
        </div>
        <Link
          href="/"
          className="flex items-center gap-1 text-white font-medium"
        >
          <p>Login</p>
          <ArrowRightIcon className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}
