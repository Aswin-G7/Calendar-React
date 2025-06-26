import React, { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/en";

import "./Calender.css";

const events = [
  {
    date: "2025-06-06",
    startTime: "00:00",
    endTime: "01:30",
    color: "#f6be23",
    title: "Daily Standup",
  },
  {
    date: "2025-06-26",
    startTime: "04:30",
    endTime: "07:30",
    color: "#f6501e",
    title: "Weekly catchup",
  },
];

const getDaysInMonth = (month, year) => {
  const firstDay = dayjs().year(year).month(month).date(1);
  const days = [];
  const startDayOfWeek = firstDay.day();

  for (let i = 0; i < startDayOfWeek; i++) {
    days.push(null);
  }

  const daysInMonth = firstDay.daysInMonth();
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(dayjs().year(year).month(month).date(i));
  }

  return days;
};

const Calendar = () => {
  const today = dayjs();
  const [currentMonth, setCurrentMonth] = useState(today.month());
  const [currentYear, setCurrentYear] = useState(today.year());

  const days = getDaysInMonth(currentMonth, currentYear);

  const prevMonth = () => {
    const newDate = dayjs().year(currentYear).month(currentMonth).subtract(1, "month");
    setCurrentMonth(newDate.month());
    setCurrentYear(newDate.year());
  };

  const nextMonth = () => {
    const newDate = dayjs().year(currentYear).month(currentMonth).add(1, "month");
    setCurrentMonth(newDate.month());
    setCurrentYear(newDate.year());
  };

  const getEventsForDate = (date) => {
    if (!date) return [];
    return events.filter(e => dayjs(e.date).isSame(date, 'day'));
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className="header-left">
          <h2>{dayjs().month(currentMonth).format("MMMM")} {currentYear}</h2>
          <p className="current-date">Today: {today.format("dddd, MMMM D, YYYY")}</p>
        </div>

        <div className="header-center">
          {/* You can add filters or a search bar here in the future */}
        </div>

        <div className="header-right">
          <div className="button-group">
            <button className="nav-button">Today</button>
            <button className="nav-button">+ Add Event</button>
          </div>
          <div className="nav-controls">
            <button onClick={prevMonth} className="nav-button">
              <i className="fas fa-angle-left" style={{ fontSize: "24px" }}></i>
            </button>
            <button onClick={nextMonth} className="nav-button">
              <i className="fas fa-angle-right" style={{ fontSize: "24px" }}></i>
            </button>
          </div>
        </div>
      </div>

      <div className="calendar-box">
        <div className="calendar-grid day-names">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
            <div
              key={day}
              className={index === today.day() ? "current-day-name" : ""}
            >
              {day}
            </div>
          ))}
        </div>

        <div className="calendar-grid">
          {days.map((date, index) => {
            const hasEvents = date && getEventsForDate(date).length > 0;
            const eventColor = hasEvents ? getEventsForDate(date)[0].color : null;
            const lightBg = hasEvents ? `${eventColor}22` : ""; // light background with alpha

            const style = hasEvents
              ? { borderLeft: `7px solid ${eventColor}`, backgroundColor: lightBg }
              : {};

            return (
              <div
                key={index}
                className={`calendar-cell ${date?.isSame(today, 'day') ? 'today' : ''}`}
                style={style}
              >
                <div className="date-number">{date?.date()}</div>
                <div className="events">
                  {getEventsForDate(date).map((e, i) => (
                    <div
                      key={i}
                      title={`${e.startTime} - ${e.endTime}`}
                      className="event"
                      style={{ backgroundColor: e.color }}
                    >
                      {e.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
