//* Imports
import validateYoutubeURL from "../../../utils/functions/validateYoutubeURL";
import constants from "../../../utils/tokens/contansts";

//* Tetsing Code
describe("Test Validate YouTube Funcion", () => {
  const InValidYoutubeURLs: string[] = [
    "https://www.youtu",
    "https://wwe.com/watch?v=n_xbCcXQeqY",
    "https://.yoube.com/watch?v=n_xbCcXQeqY",
  ];

  it("Should Return True if YouTube URL is Valid", () => {
    expect(validateYoutubeURL(constants.YOUTUBE_TEST_URL)).toBeTruthy();
  });

  InValidYoutubeURLs.forEach((url: string) => {
    it("Should Return False if YouTube URL is InValid", () => {
      expect(validateYoutubeURL(url)).toBeFalsy();
    });
  });
});
