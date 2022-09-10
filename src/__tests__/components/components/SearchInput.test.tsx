//* Imports
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import SearchInput from "../../../components/components/SearchInput";
import constants from "../../../utils/tokens/contansts";
import App from "../../../App";
import Home from "../../../components/pages/Home";

//* Tetsing Code
describe("Test Search Input Component", () => {
  it("Should be Visible in Document", () => {
    render(<SearchInput onSearch={(url: string) => url} />);

    const searchInput = screen.getByRole("search");

    expect(searchInput).toBeInTheDocument();
  });

  it("Should not have Placeholder When Focus on Input", () => {
    render(<SearchInput onSearch={(url: string) => url} />);

    const searchInput = screen.getByRole("search");

    fireEvent.focus(searchInput);

    expect(searchInput.getAttribute("placeholder")).toEqual("");
  });

  it("Should have Placeholder When Blur on Input", () => {
    render(<SearchInput onSearch={(url: string) => url} />);

    const searchInput = screen.getByRole("search");

    fireEvent.blur(searchInput);

    expect(searchInput.getAttribute("placeholder")).toEqual(
      "Enter Youtube's Video URL..."
    );
  });

  it("Should Input Value Change on Type on Input", () => {
    render(<SearchInput onSearch={(url: string) => url} />);

    const searchInput = screen.getByRole("search");

    userEvent.type(searchInput, "test-text-input");

    expect(searchInput.getAttribute("value")).toEqual("test-text-input");
  });

  it("Should Show Image when Youtube URL is Valid", () => {
    render(<Home />);

    const searchInput = screen.getByRole("search");
    const youtubeThumbnail = screen.getByAltText("YouTube Thumbnail");
    const searchButton = screen.getByText("Get");

    userEvent.type(searchInput, constants.YOUTUBE_TEST_URL);
    userEvent.click(searchButton);

    expect(youtubeThumbnail.getAttribute("src")).toEqual(
      "https://i.ytimg.com/vi/NrYNEyPXPFI/maxresdefault.jpg"
    );
  });
});
