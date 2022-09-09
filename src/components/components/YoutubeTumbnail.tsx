import { FC } from "react";
import clsx from "clsx";

interface Props {
  ytSrc: string;
}

const YoutubeTumbnail: FC<Props> = ({ ytSrc }) => {
  return (
    <section
      className={clsx(
        "w-full flex justify-center items-center pt-10 pb-16",
        "pb-16"
      )}
    >
      <div className="relative flex items-center justify-center w-full h-full overflow-hidden md:w-2/3 youtube-thumbnail-container rounded-3xl md:h-[560px]">
        <img
          src={ytSrc}
          alt="YouTube Thumbnail"
          className={clsx(
            "object-cover",
            "rounded-3xl youtube-thumbnail duration-500 w-full h-full"
          )}
        />
        <div
          className={
            "absolute top-0 left-0 w-full h-full duration-300 border-4 border-red-400/80 hover:cursor-pointer hover:bg-red-600/50 rounded-3xl"
          }
        ></div>
      </div>
    </section>
  );
};

export default YoutubeTumbnail;
