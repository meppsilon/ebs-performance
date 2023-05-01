import { Fragment, useEffect, useState } from 'react';
import range from 'lodash/range';
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Layout from '../../components/Layout';
import TurfSpaceForm from '../../components/TurfSpaceForm';
import { getTurfSpaceData } from '../../utils/firebase';
import Select from '../../components/Select';
import { Field, Form } from 'react-final-form';

const isApril9th = (date) => {
  if (!date) return false;
  const isApril = date.getMonth() === 3;
  const is9th = date.getDate() === 9;
  return isApril && is9th;
};

const formatTime = (hours) => {
  const isHalf = hours % 1 === 0.5;
  const minutes = isHalf ? '30' : '00';
  const hourModulo = (isHalf ? hours - 0.5 : hours) % 12;
  const hourTime = hourModulo === 0 ? 12 : hourModulo;
  const amPm = hours / 12 < 1 ? 'am' : 'pm';
  return `${hourTime}:${minutes} ${amPm}`;
};

const findTimeRange = (currentHour) => {
  const fullHourRange = range(8, 21, 0.5);
  return fullHourRange.filter((hour) => hour > currentHour);
};

const findMinuteRange = () => {
  const fullMinuteRange = range(0, 60, 5);
  return fullMinuteRange;
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

const SaunaPlunge = () => {
  const today = new Date();
  const [radio, setRadio] = useState('sauna');
  const [date, setDate] = useState(today);
  const [time, setTime] = useState();
  const [existingTimes, setExistingTimes] = useState([]);

  const currentHour = today.getHours();
  const currentMinute = today.getMinutes();
  const baseTimeRange = findTimeRange(isToday(date) ? currentHour : 0);
  const baseMinuteRange = findMinuteRange();
  const selectedDayExistingTimes = existingTimes
    .filter((t) => isSelectedDate(new Date(t), date))
    .map((t) => {
      const thatDate = new Date(t);
      return { hour: thatDate.getHours(), minutes: thatDate.getMinutes() };
    });
  const timeRange = baseTimeRange.filter(
    (hour) =>
      selectedDayExistingTimes.findIndex((time) => time.hour === hour) === -1
  );
  const hourRange = timeRange.filter((hour) => hour % 1 === 0);
  const minuteRange = baseMinuteRange.filter(
    (minute) =>
      selectedDayExistingTimes.findIndex((time) => time.minutes === minute) ===
      -1
  );
  console.log('minuteRange', minuteRange, baseMinuteRange);

  useEffect(() => {
    const getTurfSpaceWrapper = async () => {
      const turfSpaceRegisters = await getTurfSpaceData();
      const dates = turfSpaceRegisters.filter((e) => e.paid).map((e) => e.date);
      setExistingTimes(dates);
    };
    getTurfSpaceWrapper();
  }, []);

  return (
    <Layout className="bg-ebsBlack text-white">
      <div className="max-w-screen-md md:mx-auto mx-6 my-10">
        <div className="flex items-baseline mb-8">
          <h1 className="mb-0">Reserve Time in our Sauna or Cold Plunge</h1>
        </div>
        {time && date ? (
          <Fragment>
            <h2>
              Thank you for selecting a time to reserve the sauna or cold
              plunge! To complete your reservation, please provide your
              information below.
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
              Rent out time to use the sauna or cold plunge. Select a time
              below, provide your details, and the sauna or cold plunge is yours
              to use.
            </div>
            <h2>Sauna or cold plunge</h2>
            <div className="flex mb-6">
              <div className="flex">
                <input
                  type="radio"
                  name="saunaOrPlunge"
                  value="sauna"
                  checked={radio === 'sauna'}
                  className="cursor-pointer"
                  onChange={() => setRadio('sauna')}
                />
                <label htmlFor="sauna" className="ml-2 font-semibold">
                  Sauna
                </label>
              </div>
              <div className="ml-4">
                <input
                  type="radio"
                  name="saunaOrPlunge"
                  value="plunge"
                  checked={radio === 'plunge'}
                  className="cursor-pointer"
                  onChange={() => setRadio('plunge')}
                />
                <label htmlFor="plunge" className="ml-2 font-semibold">
                  Plunge
                </label>
              </div>
            </div>
            <h2>Choose a date &amp; time</h2>
            <div className="sm:flex flex-wrap sm:space-x-12 space-x-0">
              <div className="text-ebsBlack">
                <h3 className="text-white">Available dates</h3>
                <Calendar
                  onChange={(date) => {
                    setDate(date);
                  }}
                  value={date}
                  tileDisabled={({ date }) => {
                    const startOfToday = today.setHours(0, 0, 0, 0);
                    const currentDate = new Date(startOfToday);
                    const beforeCurrent = date < currentDate;
                    return beforeCurrent || isApril9th(date);
                  }}
                />
              </div>
              <div className="w-full sm:w-auto mt-8 sm:mt-0">
                <h3>Available times</h3>
                {radio === 'sauna' && timeRange.length > 0 && (
                  <div className="flex flex-col w-full space-y-2 w-full">
                    {timeRange.map((x) => (
                      <button
                        key={x}
                        className="px-4 py-2 border rounded w-full sm:w-60"
                        onClick={() => {
                          setTime(x);
                          setDate(new Date(date.setHours(x)));
                        }}
                      >
                        {formatTime(x)}
                      </button>
                    ))}
                  </div>
                )}
                {radio === 'plunge' && hourRange.length > 0 && (
                  <Form
                    onSubmit={(data) => {
                      console.log('data', data);
                    }}
                  >
                    {(props) => (
                      <form
                        onSubmit={props.handleSubmit}
                        className="flex flex-col w-full space-y-2 w-full"
                      >
                        <div className="text-black">
                          <Field
                            name="hours"
                            placeholder="Hours"
                            label="Hours"
                            component={Select}
                            options={hourRange.map((hour) => (
                              <option key={hour} value={hour}>
                                {hour}
                              </option>
                            ))}
                          />
                          <Field
                            name="minutes"
                            placeholder="Minutes"
                            label="Minutes"
                            component={Select}
                            options={minuteRange.map((minute) => (
                              <option key={minute} value={String(minute)}>
                                {minute}
                              </option>
                            ))}
                          />
                          <Field name="amPm" label="AM/PM" component={Select} />
                        </div>
                        <button type="submit" className="btn-primary">
                          Select
                        </button>
                      </form>
                    )}
                  </Form>
                )}
                {date && hourRange.length === 0 && (
                  <div className="flex flex-col w-full space-y-2 w-full">
                    No available times today
                  </div>
                )}
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </Layout>
  );
};

export default SaunaPlunge;
