import React, { useState, useEffect } from "react";
import moment from "moment";
import "./styles.scss";
import { buildCalender } from "./calender-helper";
import styledDates from "./style";
import Header from "./header";

export default function Calender() {
  const [calender, setCalender] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    setCalender(buildCalender(value));
  }, [value]);

  return (
    <div className="calender-div">
      <Header value={value} setValue={setValue} />
      <div className="day-names">
        {["M", "T", "W", "T", "F", "S", "S"].map((weekDay, index) => (
          <span key={index}>{weekDay}</span>
        ))}
      </div>
      <div className="calendar-body">
        {calender.map((week, index) => (
          <div key={index} className="week-div">
            {week.map((day, index) => (
              <div
                key={index}
                className="day-div"
                onClick={() => setValue(day)}
              >
                <div className={styledDates(day, value)}>
                  {day.format("D").toString()}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
