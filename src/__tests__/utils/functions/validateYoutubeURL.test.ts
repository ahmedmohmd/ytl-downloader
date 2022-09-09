//* Imports
import validateYoutubeURL from "../../../utils/functions/validateYoutubeURL";
import constants from "../../../utils/tokens/contansts";

describe("Test Validate YouTube Funcion", () => {
  const InValidYoutubeURLs: string[] = [
    "https://www.youtube.com",
    "https://www.youte.com/watch?v=n_xbCcXQeqY",
    "https://.youtube.com/watch?v=n_xbCcXQeqY",
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
