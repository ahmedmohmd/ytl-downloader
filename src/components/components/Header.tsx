//* Imports
import { FC } from "react";

//* Header Component
const Header: FC = () => {
  const handleScroll = () => {
    window.scroll({
      left: 0,
      top: 1634,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full py-16 lg:py-20">
      <div className="flex flex-col items-center justify-evenly lg:justify-between w-full min-h-[calc(100vh-300px)] lg:mb-0 sm:mb-10 lg:flex-row">
        <div className="mb-6 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-1">
            <h2 className="text-center xl:text-start max-w-lg mb-4 font-sans text-4xl font-bold !leading-[1.3] tracking-tight text-gray-900 sm:text-5xl xl:text-7xl ">
              Get{" "}
              <span className="px-3 text-white bg-red-500/90 rounded-xl">
                YouTube
              </span>{" "}
              <span className="px-3 text-white bg-yellow-500/90 rounded-xl">
                Thumbnail
              </span>{" "}
              Now
              <br />
              And For{" "}
              <span className="px-4 text-white bg-green-500/90 rounded-2xl">
                Free!
              </span>{" "}
            </h2>
            <p className="text-base text-center text-gray-600 xl:text-start lg:text-lg !leading-[2]">
              YT Downloader is a Website Which Let You to Download{" "}
              <span className="text-sm inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full  font-medium bg-yellow-100 text-yellow-800">
                Youtube Thumbnail
              </span>{" "}
              With High Quality and Completly{" "}
              <span className="inline-flex items-center text-sm gap-1.5 py-1.5 px-3 rounded-full  font-medium bg-emerald-100 text-emerald-800">
                Free
              </span>
              .
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-[90%] sm:w-[50%]  lg:w-[40%] xl:w-1/2">
          <img
            className="object-cover"
            src="/assets/images/youtube-media.png"
            alt=""
          />
        </div>
      </div>
      <button
        aria-label="Scroll down"
        onClick={handleScroll}
        className="flex items-center justify-center w-12 h-12 mx-auto duration-300 transform animate-bounce hover:cursor-pointer text-red-500/90 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Header;
