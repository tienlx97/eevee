const MONTH = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const toDate = (val?: string) => {
  if (!val) {
    return 'October 25';
  }

  const dateParts = val.split('/');

  // month is 0-based, that's why we need dataParts[1] - 1
  const mydate = new Date(+dateParts[2], (dateParts[1] as any) - 1, +dateParts[0]);
  const month = MONTH[mydate.getMonth()];
  return month + ' ' + mydate.getDate();
};
