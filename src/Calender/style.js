function isSelected(day, value) {
  return value.isSame(day, "day");
}

function isBeforeToday(day) {
  return day.isBefore(new Date(), "day");
}

function isToday(day) {
  return day.isSame(new Date(), "day");
}

export default function styledDates(day, value) {
  if (isSelected(day, value)) return "selected";
  if (isBeforeToday(day)) return "before";
  if (isToday(day)) return "today";
  else return "day-text";
}
