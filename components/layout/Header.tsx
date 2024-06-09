import Link from "next/link";
import { menus } from "../../constants";

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav className="container relative flex justify-between items-center h-20">
        <div>
          <Link href="/" className="text-light text-xl font-semibold">
            <span className="text-main">S</span>Ridoy
            <span className="text-main">.</span>
          </Link>
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-8 items-center">
            {menus.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.link}
                  className="text-light font-medium text-sm hover:text-main transition ease-in-out duration-300"
                >
                  {item.title}
                </Link>
              </li>
            ))}

            <button className="bg-main text-light rounded-full px-5 py-2">
              Hiar Me
            </button>
          </ul>
        </div>
        <div className="flex md:hidden text-light">
          <i id="bar" className="fa-solid fa-bars"></i>
        </div>

        {/* mobail menu   */}
        <ul
          id="mobile-menu"
          className="hidden flex-col absolute top-20 bg-black bg-opacity-90 w-full gap-4 items-center rounded-md py-10"
        >
          <li>
            <a
              href="#"
              className="text-light font-medium text-sm hover:text-main transition ease-in-out duration-300"
            >
              Home
            </a>
          </li>

          <button className="bg-main text-light rounded-full px-5 py-2">
            Hiar Me
          </button>

          <span id="cross-main" className="text-light absolute top-5 right-5">
            <i className="fa-solid fa-x"></i>
          </span>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
