import Link from "next/link";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

interface NavItem {
  title: string;
  destination: string;
}

const navigationItems: NavItem[] = [
  {title: "Home", destination: "/"},
  {title: "Blog", destination: "/blog"},
];

const NavBar = () => {
  return (
    <div className="sticky border-b top-0 z-20 bg-white/70 backdrop-blur-md h-14 flex items-center">
      <MaxWidthWrapper>
        <nav>
          <ul className="flex gap-4">
            {navigationItems.map((item) => (
              <Link key={item.destination} href={item.destination}>
                {item.title}
              </Link>
            ))}
          </ul>
        </nav>
      </MaxWidthWrapper>
    </div>
  );
};

export default NavBar;
