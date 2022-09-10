//* Imports
import getVideoId from "../../../utils/functions/getVideoId";
import constants from "../../../utils/tokens/contansts";

//* Tetsing Code
describe("Test Get YouTube Video ID", () => {
  it("Should get Video Id", () => {
    expect(getVideoId(constants.YOUTUBE_TEST_URL)).toEqual("NrYNEyPXPFI");
  });
});
