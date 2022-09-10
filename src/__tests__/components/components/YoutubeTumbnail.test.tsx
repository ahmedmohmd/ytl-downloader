//* Imports
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import YoutubeTumbnail from "../../../components/components/YoutubeTumbnail";
import constants from "../../../utils/tokens/contansts";

//* Tetsing Code
describe("Test Youtube Thumbnile Component", () => {
  it("Should Image be Visible in Document", () => {
    render(<YoutubeTumbnail ytSrc={constants.YOUTUBE_TEST_URL} />);

    const youtubeThumbnail = screen.getByAltText("YouTube Thumbnail");

    expect(youtubeThumbnail).toBeInTheDocument();
  });
});
