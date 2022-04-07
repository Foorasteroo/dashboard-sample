import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const getActiveClass = (path: string) => {
    return router.asPath === path ? "text-[#2e91a3]" : "";
  };

  return (
    <nav className="flex flex-col items-center gap-4 py-4 sm:px-12 sm:min-h-screen">
      <div>
        <Link href="/home">
          <a>
            <h2 className="hidden">Minnow</h2>
            <Image
              src="/logo.png"
              alt="Logo"
              layout="fixed"
              width={130}
              height={68}
            />
          </a>
        </Link>
      </div>
      <div className="flex flex-row sm:flex-col gap-4 px-4 w-full justify-between">
        <Link href="/home">
          <a className="flex flex-row gap-x-4">
            <span>⬜️</span>
            <span className={getActiveClass("/home")}>Home</span>
          </a>
        </Link>
        <Link href="/report">
          <a className="flex flex-row gap-x-4">
            <span>⬜️</span>
            <span className={getActiveClass("/report")}>Report</span>
          </a>
        </Link>
        <Link href="/settings">
          <a className="flex flex-row gap-x-4">
            <span>⬜️</span>
            <span className={getActiveClass("/settings")}>Settings</span>
          </a>
        </Link>
      </div>
    </nav>
  );
}
