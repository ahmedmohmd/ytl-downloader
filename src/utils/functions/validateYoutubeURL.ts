const validateYoutubeURL = (url: string): boolean => {
  const YOUTUBE_ID_REGEX =
    /^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.be)\/.+$/;

  return YOUTUBE_ID_REGEX.test(url);
};

export default validateYoutubeURL;
