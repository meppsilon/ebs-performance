import { Fragment, useEffect, useState } from 'react';
import range from 'lodash/range';
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Layout from '../../components/Layout';
import TurfSpaceForm from '../../components/TurfSpaceForm';
import { getTurfSpaceData } from '../../utils/firebase';

const formatTime = (time) => {
  const hourModulo = time % 12;
  const hourTime = hourModulo === 0 ? 12 : hourModulo;
  const amPm = time / 12 < 1 ? 'am' : 'pm';
  return `${hourTime}:00 ${amPm}`;
};

const findTimeRange = (currentHour) => {
  const fullHourRange = range(8, 20);
  return fullHourRange.filter((hour) => hour > currentHour);
};

const isSelectedDate = (date, selectedDate) => {
  if (!date || !selectedDate) return;
  return (
    date.getDate() === selectedDate.getDate() &&
    date.getMonth() === selectedDate.getMonth() &&
    date.getFullYear() === selectedDate.getFullYear()
  );
};

const isToday = (date) => {
  if (!date) return;
  if (typeof date !== 'object') {
    date = new Date(date);
  }
  const today = new Date();
  return isSelectedDate(date, today);
};

const TurfSpace = () => {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [time, setTime] = useState();
  const [existingTimes, setExistingTimes] = useState([]);

  const currentHour = today.getHours();
  const baseTimeRange = findTimeRange(isToday(date) ? currentHour : 0);
  const selectedDayExistingTimes = existingTimes
    .filter((t) => isSelectedDate(new Date(t), date))
    .map((t) => new Date(t).getHours());
  const timeRange = baseTimeRange.filter((hour) => !selectedDayExistingTimes.includes(hour));

  useEffect(() => {
    const getTurfSpaceWrapper = async () => {
      const turfSpaceRegisters = await getTurfSpaceData();
      const dates = turfSpaceRegisters
        .filter((e) => e.paid)
        .map((e) => e.date);
      setExistingTimes(dates);
    };
    getTurfSpaceWrapper();
  }, []);

  return (
    <Layout className="bg-ebsBlack text-white">
      <div className="max-w-screen-md md:mx-auto mx-6 my-10">
        <div className="flex items-baseline mb-8">
          <h1 className="mb-0">Reserve Turf Space</h1>
        </div>
        {time && date ? (
          <Fragment>
            <h2>
              Thank you for selecting a time to reserve the turf space! To
              complete your reservation, please provide your information below.
            </h2>
            <h3>Selected time</h3>
            <div>
              {date.toDateString()} at {formatTime(time)}
            </div>
            {time && date && (
              <button className="link mb-6" onClick={() => setTime()}>
                Change time
              </button>
            )}
            <h3>Personal details</h3>
            <TurfSpaceForm date={date} />
          </Fragment>
        ) : (
          <Fragment>
            <div className="mb-10">
              Rent out time to use the turf space. Select a time below, provide
              your details, and the turf is yours to use.
            </div>
            <h2>Choose a date &amp; time</h2>
            <div className="sm:flex flex-wrap sm:space-x-12 space-x-0">
              <div className="text-ebsBlack">
                <h3 className="text-white">Available dates</h3>
                <Calendar
                  onChange={(date) => {
                    setDate(date);
                  }}
                  activeStartDate={today}
                  value={date}
                  tileDisabled={({ date }) => {
                    // disabled if:
                    // current date already scheduled
                    // current date has passed
                    const startOfToday = today.setHours(0, 0, 0, 0);
                    const currentDate = new Date(startOfToday);
                    const beforeCurrent = date < currentDate;
                    return beforeCurrent;
                  }}
                />
              </div>
              <div className="w-full sm:w-auto mt-8 sm:mt-0">
                <h3>Available times</h3>
                {date && timeRange.length > 0 ? (
                  <div className="flex flex-col w-full space-y-2 w-full">
                    {timeRange.map((x) => (
                      <button
                        key={x}
                        className="px-4 py-2 border rounded-sm w-full sm:w-60"
                        onClick={() => {
                          setTime(x);
                          setDate(new Date(date.setHours(x)));
                        }}
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
          </Fragment>
        )}
      </div>
    </Layout>
  );
};

export default TurfSpace;
