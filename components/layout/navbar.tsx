"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

interface NavLink {
  name: string;
  url: string;
  slug: string;
  subLinks?: {
    name: string;
    url: string;
  }[];
}

const navLinks: NavLink[] = [
  {
    url: "/",
    name: "HOME",
    slug: "home",
  },
  {
    url: "/about",
    name: "ABOUT",
    slug: "about",
  },
  {
    url: "#",
    name: "SERVICES",
    slug: "services",
    subLinks: [
      { url: "/services/general-contractor", name: "General Contractor" },
      { url: "/services/construction", name: "Construction" },
      { url: "/services/project-management", name: "Project Management" },
    ],
  },
  {
    url: "/projects",
    name: "PROJECTS",
    slug: "projects",
  },
  {
    url: "/testimonials",
    name: "TESTIMONIALS",
    slug: "testimonials",
  },
  {
    url: "/pearl-abroad",
    name: "PEARL ABROAD",
    slug: "pearl-abroad",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollHeight = window.scrollY;
    setScrolled(scrollHeight > 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "unset";
  }, [openMenu]);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
  };

  return (
    <header
      // className={`${
      //   scrolled ? "fixed transition ease-in" : ""
      // } left-0 right-0 z-30 w-full`}
      className={`${
        scrolled ? "fixed transition ease-in bg-white shadow-md" : ""
      } left-0 right-0 z-[3000] w-full`}
    >
      <main className="w-full relative h-full">
        <div className="w-full flex flex-row items-center  lg:justify-center justify-between space-x-32 bg-white xl:px-32 lg:px-10 px-4  h-20">
          <Link href="/">
            <Image
              src="/logos/Pearl_logo.png"
              alt="Pearl logo"
              width={80}
              height={60}
              className={`${scrolled ? "transition ease-in" : ""}`}
            />
          </Link>

          <section
            className={`${
              scrolled
                ? "justify-end xl:justify-end transition ease-in"
                : "justify-end xl:justify-center"
            } flex items-center xl:w-[70%]`}
          >
            {/* DESKTOP MENU */}
            <ul
              className={`hidden xl:flex xl:flex-row flex-grow justify-between w-full h-full`}
            >
              {navLinks.map((link, id) => (
                <nav
                  className="grid items-center mx-2 mb-4 xl:mb-0 relative"
                  key={id}
                  onMouseEnter={() =>
                    link.subLinks && setOpenDropdown(link.slug)
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                  onClick={() =>
                    link.subLinks &&
                    setOpenDropdown((prev) =>
                      prev === link.slug ? null : link.slug
                    )
                  }
                >
                  <div className="flex items-center">
                    <Link
                      href={link.url}
                      className={`transition-colors xl:text-sm text-2xl font-rubik duration-200 hover:text-primary-100 ${
                        pathname === link.url
                          ? "text-primary-100 font-bold"
                          : "xl:font-normal font-medium text-[#000000]"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.subLinks && (
                      <span
                        className={`ml-2 transition-transform duration-300 ${
                          openDropdown === link.slug ? "" : "rotate-180"
                        }`}
                      >
                        <ChevronUp className="w-5 h-5" />
                      </span>
                    )}
                  </div>

                  {link.subLinks && openDropdown === link.slug && (
                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] z-[5000]">
                      {link.subLinks.map((subLink, subId) => (
                        <Link
                          key={subId}
                          href={subLink.url}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-100"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </nav>
              ))}

              {/* CONTACT BUTTON */}
              <div className="justify-end   hidden lg:w-[30%] xl:flex">
                <Link href="/contact">
                  <button
                    type="button"
                    className="bg-primary-100 hover:opacity-90  transform transition duration-200 hover:shadow-md flex items-center justify-center gap-1.5 font-poppins w-[150px] h-[50px] text-white -tracking-[3%] font-bold"
                  >
                    CONTACT
                  </button>
                </Link>
              </div>
            </ul>

            {/* MOBILE MENU */}
            <AnimatePresence>
              {openMenu && (
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={menuVariants}
                  className="fixed top-0 right-0 bottom-0 bg-white z-[5000] lg:w-[40%] sm:w-3/4 w-11/12 flex flex-col py-8 sm:px-10 px-8 overflow-y-auto cursor-pointer"
                >
                  <span
                    className="flex justify-end xl:hidden"
                    onClick={() => setOpenMenu(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>

                  <h6 className="capitalize text-[#8C8C8C] xl:hidden block font-medium my-5">
                    Menu
                  </h6>

                  {navLinks.map((link, id) => (
                    <div key={id} className="mb-4">
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() =>
                          setOpenDropdown((prev) =>
                            prev === link.slug ? null : link.slug
                          )
                        }
                      >
                        <Link
                          href={link.url}
                          className={`transition-colors text-2xl font-rubik duration-200 ${
                            pathname === link.url
                              ? "text-primary-100 font-bold"
                              : "font-medium text-[#000000]"
                          }`}
                        >
                          {link.name}
                        </Link>
                        {link.subLinks && (
                          <span
                            className={`ml-2 transition-transform duration-300 ${
                              openDropdown === link.slug ? "" : "rotate-180"
                            }`}
                          >
                            <ChevronUp className="w-5 h-5" />
                          </span>
                        )}
                      </div>
                      {link.subLinks && openDropdown === link.slug && (
                        <div className="pl-4 mt-2 space-y-2">
                          {link.subLinks.map((subLink, subId) => (
                            <Link
                              key={subId}
                              href={subLink.url}
                              className="block text-lg text-gray-700 hover:text-primary-100"
                              onClick={() => setOpenMenu(false)}
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* CONTACT BUTTON */}
                  <div className="flex justify-center mt-8 absolute bottom-10">
                    <Link href="/contact">
                      <button
                        type="button"
                        className="bg-primary-100 hover:opacity-90 transform transition duration-200 hover:shadow-md flex items-center justify-center gap-1.5 font-poppins w-[250px] h-[59px] text-white -tracking-[3%] font-bold"
                      >
                        CONTACT
                      </button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-row-reverse xl:hidden cursor-pointer">
              {!openMenu && (
                <span onClick={() => setOpenMenu(true)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </span>
              )}
            </div>
          </section>
        </div>
        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[4000] bg-black/80"
              onClick={() => setOpenMenu(false)}
            />
          )}
        </AnimatePresence>
      </main>
    </header>
  );
};

export default Navbar;
