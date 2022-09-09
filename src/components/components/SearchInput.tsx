import { FC, useState, FormEvent } from "react";
import validateYoutubeURL from "../../utils/functions/validateYoutubeURL";

interface Props {
  onSearch: (url: string) => void;
}

const SearchInput: FC<Props> = ({ onSearch }) => {
  const [url, setUrl] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>(
    "Enter Youtube's Video URL..."
  );
  const [isUrlValid, setIsUrlValid] = useState<boolean>(true);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setUrl(event.currentTarget.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const testResult = validateYoutubeURL(url);

    if (testResult) {
      onSearch(url);
      setIsUrlValid(true);
    } else {
      setIsUrlValid(false);
    }
  };

  return (
    <form
      role="form"
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center w-full gap-4 pt-16"
    >
      <div className="flex flex-col items-center justify-center w-full gap-3 md:w-2/3 md:flex-row lg:justify-center lg:items-center">
        <input
          type="url"
          role="search"
          value={url}
          placeholder={placeholder}
          onFocus={() => setPlaceholder("")}
          onBlur={() => setPlaceholder("Enter Youtube's Video URL...")}
          onChange={handleChange}
          className="block w-full md:w-1/2 px-6 py-4 border-2 border-gray-200 rounded-full outline-none font-['Capriola'] truncate placeholder:text-gray-300 text-red-500/90 text-md focus:border-red-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
        />

        <button
          type="submit"
          className="inline-flex items-center justify-center w-1/2 gap-2 px-6 py-4 text-sm font-semibold text-white transition-all bg-red-500 border border-transparent rounded-md rounded-full md:w-auto hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        >
          Get
        </button>
      </div>
      {/* {isUrlValid ? null : <span>Error</span>} */}
    </form>
  );
};

export default SearchInput;
