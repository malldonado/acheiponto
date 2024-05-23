import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <nav className="bg-white w-full flex relative justify-between items-end mx-auto px-8 h-18 max-w-7xl">

      {/* Logo */}
      <div className="inline-flex items-center h-full">
        <Link href="/" className="hidden md:block">
          <img className="h-10" src="/logo.svg" alt="" />
        </Link>
        <Link href="/" className="block md:hidden">
          <img className="h-10" src="/logo.svg" alt="" />
        </Link>
      </div>

      {/* Search */}
      <div className="hidden md:flex space-x-16 h-full items-center">
        <div className="pt-2 relative mx-auto text-gray-600">
          <input
            className="border-2 border-gray-300 w-96 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="absolute right-0 top-auto bottom-auto h-[40px] mr-4">
            <IoSearch className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="hidden md:flex space-x-4 h-full items-center">
        <Link
          href="/login"
          className="py-2 px-6 bg-red-500 text-white font-bold rounded-md hover:bg-black"
        >
          Sign in
        </Link>
        <Link
          href="/register"
          className="py-2 px-6 bg-red-500 text-white font-bold rounded-md hover:bg-black"
        >
          Sign up
        </Link>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center h-full">
        <button
          id="mobile-menu-button"
          className="outline-none mobile-menu-button"
        >
          <RxHamburgerMenu className="h-6 w-6 text-red-500" />
        </button>
      </div>

      {/* Mobile menu */}
      <div className="hidden mobile-menu">
        <ul className="">
          <li className="active">
            <Link
              href="/products"
              className="block text-sm px-2 py-4 hover:bg-gray-200 transition duration-300"
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              href="/features"
              className="block text-sm px-2 py-4 hover:bg-gray-200 transition duration-300"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="/marketplace"
              className="block text-sm px-2 py-4 hover:bg-gray-200 transition duration-300"
            >
              Marketplace
            </Link>
          </li>
          <li>
            <Link
              href="/company"
              className="block text-sm px-2 py-4 hover:bg-gray-200 transition duration-300"
            >
              Company
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
