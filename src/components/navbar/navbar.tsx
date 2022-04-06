import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";

const Nav = styled.nav`
  min-height: 90vh;
`;

export default function Navbar() {
  return (
    <Nav className="flex flex-col gap-2 p-8 min-h-screen">
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
      <Link href="/home">
        <a className="flex flex-row gap-x-4">
          <span>⬜️</span>
          <span>Home</span>
        </a>
      </Link>
      <Link href="/report">
        <a className="flex flex-row gap-x-4">
          <span>⬜️</span>
          <span>Report</span>
        </a>
      </Link>
      <Link href="/settings">
        <a className="flex flex-row mt-auto gap-x-4">
          <span>⬜️</span>
          <span>Settings</span>
        </a>
      </Link>
    </Nav>
  );
}
