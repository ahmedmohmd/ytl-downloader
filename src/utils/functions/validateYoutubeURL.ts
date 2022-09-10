const validateYoutubeURL = (url: string): boolean => {
  const YOUTUBE_ID_REGEX =
    /((http(s)?:\/\/)?)(www\.)?((youtube\.com\/)|(youtu.be\/))[\S]+/;

  return YOUTUBE_ID_REGEX.test(url);
};

export default validateYoutubeURL;
