const getTimestamp =
  Date.now ||
  function () {
    return +new Date();
  };

export const genTimeStampHash = (num = 12) => {
  return (
    Math.floor(2147483648 * Math.random()).toString(36) +
    // eslint-disable-next-line
    Math.abs(Math.floor(2147483648 * Math.random()) ^ getTimestamp()).toString(36)
  ).substr(0, num);
};
