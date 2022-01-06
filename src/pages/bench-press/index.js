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
      </div>
    </Layout>
  );
};

export default BenchPress;
