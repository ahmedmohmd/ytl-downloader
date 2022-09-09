const Header = () => {
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
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-1">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold !leading-[1.3] tracking-tight text-gray-900 sm:text-4xl lg:text-7xl ">
              Get{" "}
              <span className="px-3 text-white bg-red-500/90 rounded-xl">
                YouTube
              </span>{" "}
              <span className="px-3 text-white bg-yellow-500/90 rounded-xl">
                Thumbnail
              </span>{" "}
              Now
              <br />
              And For Free
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-1/2 ">
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
