//* Imports
import { FC } from "react";

//* About Page Component
const About: FC = () => {
  return (
    <article className="px-4 mx-auto grow">
      <h1 className="w-full py-10 text-4xl font-extrabold text-center lg:text-5xl text-red-500/90">
        ABOUT
      </h1>
      <p className="text-lg text-center text-gray-600">
        YT Downloader Website is and Website that let You to Download Youtube
        Thumnail with High Quality and Completely Free!
        <br />
        This Website made By{" "}
        <a
          href="https://github.com/ahmedmohmd"
          target="_blank"
          className="font-semibold text-red-500/90"
        >
          @Ahmed Mohamed
        </a>{" "}
        This Website Made By{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          className="font-semibold text-blue-500/90"
        >
          React JS
        </a>{" "}
        with{" "}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          className="font-semibold text-blue-600/90"
        >
          TypeScript
        </a>{" "}
        and other Modern Frontend Technology.
      </p>
    </article>
  );
};

export default About;
