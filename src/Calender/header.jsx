import React from "react";
import {
  getCurrentMonth,
  getCurrentYear,
  getNextMonth,
  getPrevMonth
} from "./calender-helper";

export default function Header({ value, setValue }) {
  return (
    <div className="calendar-header">
      <div className="previous" onClick={() => setValue(getPrevMonth(value))}>
        {String.fromCharCode(171)}
      </div>
      <div className="month-year">
        {getCurrentMonth(value)} {getCurrentYear(value)}
      </div>
      <div className="next" onClick={() => setValue(getNextMonth(value))}>
        {String.fromCharCode(187)}
      </div>
    </div>
  );
}
