"use client";
import Image from "next/image";
import Link from "next/link";

function Menu() {
  return (
    <div id="menu" className="text-center min-h-[100vh] py-28 relative">
      <div className="text-3xl max-w-[60%] mx-auto pb-8">
        <p className="fade1 pb-24 text-center">MORE TO COME SOON!</p>
        <Link href="/">Back to home</Link>
      </div>
    </div>
  );
}

export default Menu;
