import { useState } from 'react';
import range from 'lodash/range';
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Layout from '../../components/Layout';

const formatTime = (time) => {
  const hourModulo = time % 12;
  const hourTime = hourModulo === 0 ? 12 : hourModulo;
  const amPm = time / 12 < 1 ? 'am' : 'pm';
  return `${hourTime}:00 ${amPm}`;
};

const findTimeRange = (currentHour) => {
  const fullHourRange = range(7, 20);
  return fullHourRange.filter((hour) => hour > currentHour);
};

const isToday = (date) => {
  if (!date) return;
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

const TurfTime = () => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const currentHour = new Date().getHours();

  const timeRange = findTimeRange(isToday(date) ? currentHour : 0);

  return (
    <Layout className="bg-ebsBlack text-white">
      <div className="max-w-screen-md md:mx-auto mx-6 my-10">
        <h1>Turf Time</h1>
        <div>Description about turf time</div>
        <div>Choose a date & time</div>
        <div className="sm:flex flex-wrap sm:space-x-12 space-x-0">
          <div className="text-ebsBlack">
            <div className="text-white">Available dates</div>
            <Calendar
              onChange={(date) => {
                setDate(date);
              }}
              tileDisabled={({ date }) => {
                // disabled if:
                // current date already scheduled
                // current date has passed
                const currentDate = new Date(new Date().setHours(0, 0, 0, 0));
                return date < currentDate;
              }}
            />
          </div>
          <div className="w-full sm:w-auto mt-8 sm:mt-0">
            <div>Available times</div>
            {date && timeRange.length > 0 ? (
              <div className="flex flex-col w-full space-y-2 w-full">
                {timeRange.map((x) => (
                  <button
                    key={x}
                    className="px-4 py-2 border rounded-sm w-full sm:w-60"
                    onClick={() => setTime(x)}
                  >
                    {formatTime(x)}
                  </button>
                ))}
              </div>
            ) : (
              <div>No available times today</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TurfTime;
