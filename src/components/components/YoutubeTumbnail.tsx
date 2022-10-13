//* Imports
import { FC, useState } from "react";

//* YoutubeTumbnail Props Interface
interface Props {
  ytSrc: string;
}

//* YoutubeTumbnail Component
const YoutubeTumbnail: FC<Props> = ({ ytSrc }) => {
  //* States
  const [copy, setCopy] = useState<string>("Copy");

  //* Event Handlers
  const handleCopy = () => {
    window.navigator.clipboard.writeText(ytSrc);
    setCopy("Copied!");

    setTimeout(() => {
      setCopy("Copy");
    }, 2000);
  };

  return (
    <section className="flex items-center justify-center w-full pt-10 pb-16">
      <div className="relative flex items-center justify-center w-full h-full overflow-hidden lg:w-2/3 youtube-thumbnail-container rounded-3xl lg:h-[560px]">
        <img
          src={ytSrc}
          alt="YouTube Thumbnail"
          className="object-cover w-full h-full duration-500 rounded-3xl youtube-thumbnail"
        />

        <div
          className={
            "absolute top-0 left-0 w-full h-full duration-300 border-4 border-red-400/80  rounded-3xl " +
            (ytSrc === "https://wallpapercave.com/dwp1x/wp3269246.jpg"
              ? null
              : "hover:cursor-pointer hover:bg-red-600/50")
          }
        ></div>
        {ytSrc === "https://wallpapercave.com/dwp1x/wp3269246.jpg" ? null : (
          <button
            type="button"
            className="absolute inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 bg-red-500 border border-transparent rounded-2xl download-button -right-32 top-3 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            onClick={handleCopy}
          >
            {copy}
          </button>
        )}
      </div>
    </section>
  );
};

export default YoutubeTumbnail;
