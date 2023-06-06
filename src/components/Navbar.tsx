import { NavbarMenu, NavbarMenuContent } from "@/types/global.types";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

const Navbar = () => {
  const menu: NavbarMenu = {
    items: [
      {
        name: "Home",
        href: "#home",
      },
      {
        name: "About",
        href: "#about",
      },
      {
        name: "Projects",
        href: "#projects",
      },
    ],
  };

  return (
    <nav className="bg-white shadow fixed w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="font-extrabold animate-bounce">JDMC.DEV</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menu.items.map((item: NavbarMenuContent, i: number) => (
                  <Link
                    href={item.href}
                    key={i}
                    className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium duration-100 ease-in"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center gap-4">
            <div className="">
              <Link href="https://github.com/srdaniiel/jdmc.dev-website" className="flex flex-row items-center gap-1">
                <AiFillGithub className="text-3xl cursor-pointer" />
                Code
              </Link>
            </div>
            {/* Language button */}
            <div>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-gray-900 bg-gray-100 hover:bg-gray-200"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
