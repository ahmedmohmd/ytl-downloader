import { FC, useState } from "react";
import getVideoId from "../../utils/functions/getVideoId";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import YoutubeTumbnail from "../components/YoutubeTumbnail";

const Home: FC = () => {
  const [url, setUrl] = useState<string>(
    "https://wallpapercave.com/dwp1x/wp3269246.jpg"
  );

  const handleSearch = (url: string): void => {
    const videoId = getVideoId(url);
    setUrl(`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`);
  };

  return (
    <div className="container w-full px-4 mx-auto ">
      <Header />
      <SearchInput onSearch={handleSearch} />
      <YoutubeTumbnail ytSrc={url} />
    </div>
  );
};

export default Home;
