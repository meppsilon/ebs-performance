import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import { updateYouthCampData } from '../../utils/firebase';

const YouthCampSuccess = () => {
  useEffect(() => {
    const updateYouthCampWrapper = async () => {
      const yid = localStorage.getItem('yid');
      if (yid) {
        await updateYouthCampData(yid, { paid: true });
      }
      localStorage.removeItem('yid');
    };
    updateYouthCampWrapper();
  }, []);
  return (
    <Layout className="bg-ebsBlack">
      <div className="max-w-screen-md md:mx-auto mx-6 my-10 text-white">
        <h1 className="text-2xl text-white font-bold mb-10">Success!</h1>
        <h2 className="text-xl text-white font-semibold mb-8">
          Thank you for signing up for the Youth Camp.
        </h2>
        <div className="text-xl">
          <div className="font-bold italic">Important:</div>
          <div>
            Please download the <a href="/img/waiver.pdf">Youth Camp Waiver</a>
            &nbsp;and bring it to the youth camp.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default YouthCampSuccess;
