export const jsGMT = () => {
  const ita = -(new Date().getTimezoneOffset() / 60);
  const city = Intl.DateTimeFormat().resolvedOptions().timeZone.split('/')[1].replace(/_/g, ' ');
  const operator = ita > 0 ? '+' : '';
  return `${city ?? 'local'} time (GMT${operator}${ita})`;
};
