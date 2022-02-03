import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Layout from '../../components/Layout';

const TurfTime = () => {
  return (
    <Layout className="bg-ebsBlack text-white">
      <div className="max-w-screen-md md:mx-auto mx-6 my-10">
        <h1>Turf Time</h1>
        <div>Description about turf time</div>
        <div>Choose a date & time</div>
        <div className="flex flex-wrap">
          <div className="text-ebsBlack">
            <Calendar
              onChange={(date) => {
                console.log('date', date)
                // show available times for this day
              }}
              tileDisabled={({ date }) => {
                console.log('date.getDay()', date.getDay())
                // disabled if current date already scheduled
                return date.getDay() === 0
              }}
            />
          </div>
          <div>Available times</div>
        </div>
      </div>
    </Layout>
  );
};

export default TurfTime;
