import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-blue-300 h-24 text-center space-y-5 p-2">
      <div className="text-2xl">
        <Link href="/">Traversy Media</Link>
      </div>
      <div className="space-x-32 text-lg">
        <Link href="/about">About</Link>
        <Link href="/about/team">Our Team</Link>
        <Link href="/code/repos">Code</Link>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
