import React from 'react';
import Layout from '../../components/Layout';
import BenchContestForm from '../../components/BenchContestForm';

const BenchPress = () => {
  return (
    <Layout className="bg-ebsBlack">
      <div className="max-w-screen-md md:mx-auto mx-6 my-10">
        <h1 className="text-2xl text-white font-bold mb-10">
          Bench Press Contest
        </h1>
        <BenchContestForm />
        <h2 className="text-xl text-white font-semibold mb-4">Additional Details</h2>
        <ul className="text-white list-disc list-inside">
          <li>
            School ID is required at check-in on the day of the event.
          </li>
          <li>
            All participants will be weighed at check-in.
          </li>
          <li>
            Athletes will be competing in 5 categories by weight:
            <ol className="ml-6 list-decimal list-inside">
              <li>150 and under</li>
              <li>151 to 180</li>
              <li>181 to 210</li>
              <li>211 to 240</li>
              <li>241 and above</li>
            </ol>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default BenchPress;
