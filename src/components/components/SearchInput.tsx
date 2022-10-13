//* Imports
import { FC, useState, FormEvent } from "react";
import validateYoutubeURL from "../../utils/functions/validateYoutubeURL";

//* SearchInputs Props Interface
interface Props {
  onSearch: (url: string) => void;
}

//* SearchInputs Component
const SearchInput: FC<Props> = ({ onSearch }) => {
  //* States
  const [url, setUrl] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>(
    "Enter Youtube's Video URL..."
  );
  const [isUrlValid, setIsUrlValid] = useState<boolean>(true);

  //* Evend Handlers
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
      onSearch("");
      setIsUrlValid(false);
    }
  };

  //* JSX
  return (
    <form
      role="form"
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center w-full gap-4 pt-8 lg:pt-16"
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
          className="block w-full lg:w-1/2 px-6 py-4 border-2 border-gray-200 rounded-full outline-none font-['Capriola'] truncate placeholder:text-gray-300 text-red-500/90 text-md focus:border-red-500 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="inline-flex items-center justify-center w-1/2 gap-2 py-3 font-semibold text-white transition-all bg-red-500 border border-transparent rounded-full text-md lg:px-6 lg:py-4 lg:w-auto hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Get
        </button>
      </div>
      {isUrlValid ? null : (
        <span className="font-['Jua'] text-red-500 text-start">
          Sorry, Invalid Youtube's Video URL, Please Type Correct URL!
        </span>
      )}
    </form>
  );
};

export default SearchInput;
