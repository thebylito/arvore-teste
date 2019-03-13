const initDate = (date) => {
  const [year, month, day] = date.split('-');
  return new Date(Number(year), Number(month) - 1, Number(day));
};
const getDateRangeObject = (start, end) => {
  let result = [];
  const startDate = initDate(start);
  const endDate = initDate(end);
  endDate.setDate(endDate.getDate() + 1);
  while (startDate <= endDate) {
    result = [...result, { date: new Date(startDate), count: 0 }];
    startDate.setDate(startDate.getDate() + 1);
  }
  return result;
};

export { getDateRangeObject };
