const getVideoId = (url: string): string => {
  return url.split("v=")[1].split("&")[0];
};

export default getVideoId;
