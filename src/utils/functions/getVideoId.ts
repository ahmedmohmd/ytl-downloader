const getVideoId = (url: string): string => {
  const result = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return result[2] !== undefined
    ? result[2].split(/[^0-9a-z_\-]/i)[0]
    : result[0];
};

export default getVideoId;
