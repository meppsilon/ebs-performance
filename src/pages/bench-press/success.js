import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import { updateBenchPressData } from '../../utils/firebase';

const BenchPressSuccess = () => {
  useEffect(() => {
    const updateBenchPressWrapper = async () => {
      const bid = localStorage.getItem('bid');
      if (bid) {
        await updateBenchPressData(bid, { paid: true });
      }
      localStorage.removeItem('bid');
    };
    updateBenchPressWrapper();
  }, []);
  return (
    <Layout className="bg-ebsBlack">
      <div className="max-w-screen-md md:mx-auto mx-6 my-10">
        <h1 className="text-2xl text-white font-bold mb-10">Success!</h1>
        <h2 className="text-xl text-white font-semibold mb-8">
          Thank you for joining the Bench Press Contest! We will see you on March
          5th.
        </h2>
      </div>
    </Layout>
  );
}

export default BenchPressSuccess;
