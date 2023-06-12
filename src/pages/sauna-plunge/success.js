import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import { updateSaunaPlungeData } from '../../utils/firebase';

const SaunaPlungeSuccess = () => {
  useEffect(() => {
    const updateSaunaPlungeWrapper = async () => {
      const sid = localStorage.getItem('sid');
      if (sid) {
        await updateSaunaPlungeData(sid, { paid: true });
      }
      localStorage.removeItem('sid');
    };
    updateSaunaPlungeWrapper();
  }, []);
  return (
    <Layout className="bg-ebsBlack">
      <div className="max-w-screen-md md:mx-auto mx-6 my-10">
        <h1 className="text-2xl text-white font-bold mb-10">Success!</h1>
        <h2 className="text-xl text-white font-semibold mb-8">
          Thank you for reserving time to use our sauna or cold plunge! Please check your
          email to confirm the time.
        </h2>
      </div>
    </Layout>
  );
};

export default SaunaPlungeSuccess;
