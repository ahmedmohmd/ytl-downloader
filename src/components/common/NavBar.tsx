//* Imports
import { FC } from "react";
import { Link, NavLink } from "react-router-dom";

//* NavBar Component
const NavBar: FC = () => {
  return (
    <div className={"navbar bg-red-500/90 duration-100 shadow-md w-full "}>
      <header className="container z-50 flex flex-wrap w-full py-4 mx-auto text-sm md:py-2 sm:justify-start sm:flex-nowrap">
        <nav
          className="w-full px-4 mx-auto sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link
              className="inline-flex items-center text-lg font-semibold gap-x-2"
              to="/"
            >
              <img
                src="/assets/images/tab-icon.png"
                className="w-10 h-10"
                alt="Website Logo"
              />
              <span className="text-xl font-bold text-white w-52">
                YT Downloader
              </span>
            </Link>
            <div className="sm:hidden">
              <button
                type="button"
                className={
                  "hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md font-medium align-middle hover:bg-red-400/90 focus:outline-none transition-all text-sm "
                }
                data-hs-collapse="#navbar-image-and-text-1"
                aria-controls="navbar-image-and-text-1"
                aria-label="Toggle navigation"
              >
                <svg
                  className="w-5 h-5 hs-collapse-open:hidden"
                  width="16"
                  height="16"
                  fill="#e2e8f0"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hidden w-5 h-5 hs-collapse-open:block"
                  width="16"
                  height="16"
                  fill="#e2e8f0"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-image-and-text-1"
            className="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full sm:block"
          >
            <div className="flex flex-col gap-4 mt-5 font-semibold text-center text-white text-md sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
              <NavLink
                className="p-[13px] duration-300 rounded-xl bg-transparent text-white hover:bg-red-400/90"
                to={"/"}
              >
                Home
              </NavLink>

              <NavLink
                className="p-[13px] duration-300 rounded-xl bg-transparent text-white hover:bg-red-400/90"
                to={"/about"}
              >
                About
              </NavLink>

              <a
                href="https://github.com/ahmedmohmd/ytl-downloader"
                target="_blank"
                className="flex items-center justify-center pt-3 border-t-2 project-link sm:pt-0 sm:pl-3 sm:border-l-2 sm:border-t-0 border-slate-200/50"
              >
                <div className="p-3 duration-300 rounded-full hover:bg-red-400/90">
                  <img
                    src="/assets/images/github-icon.svg"
                    className="fil"
                    alt=""
                  />
                </div>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
