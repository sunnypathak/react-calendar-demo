export const buildCalender = (value) => {
  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").endOf("week");

  const calenderMatrix = [];
  while (startDay.isBefore(endDay, "day")) {
    calenderMatrix.push(
      Array(7)
        .fill(0)
        .map(() => startDay.add(1, "day").clone())
    );
  }

  return calenderMatrix;
};

//get current month
export const getCurrentMonth = (value) => {
  return value.format("MMM");
};

//get current year
export const getCurrentYear = (value) => {
  return value.format("YYYY");
};

//get previous month
export const getPrevMonth = (value) => {
  return value.clone().subtract(1, "month");
};

//get next month
export const getNextMonth = (value) => {
  return value.clone().add(1, "month");
};
