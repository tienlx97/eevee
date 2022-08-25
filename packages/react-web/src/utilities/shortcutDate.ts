export const shortcutDate = (date: Date) => {
  return (
    date.getFullYear() +
    '-' +
    ('0' + (date.getMonth() + 1)).substr(-2) +
    '-' +
    ('0' + date.getDate()).substr(-2) +
    'T' +
    ('0' + date.getHours()).substr(-2) +
    ':' +
    ('0' + date.getMinutes()).substr(-2)
  );
};
