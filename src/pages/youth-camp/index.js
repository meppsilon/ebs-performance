import React, { useEffect } from 'react';
import { getYouthCampData, removeYouthCampData } from '../../utils/firebase';
import Layout from '../../components/Layout';
import YouthCampForm from '../../components/YouthCampForm';

const noonJuly7th = new Date(2025, 6, 7, 12);

const registrationClosed = Date.now() > noonJuly7th;

const YouthCamp = () => {
  return (
    <Layout className="bg-ebsBlack text-white">
      <div className="max-w-screen-md md:mx-auto mx-6 my-10">
        <div className="flex items-baseline mb-8">
          <h1 className="mb-0">Youth Camp</h1>
        </div>
        <div className="mb-6">
          <div className="text-xl font-semibold mb-4">Event information</div>
          <div className="mb-2">
            <strong>Where:</strong>
            <br />
            Corona Del Mar High School
            <br />
            2101 Eastbluff Dr
            <br />
            Newport Beach, CA 92660
          </div>
          <div className="mb-2">
            <strong>When:</strong> Wednesday July 9th, 2025
          </div>
          <div className="mb-2">
            <strong>Time:</strong> 4:30pm check-in (5:30pm - 7:30pm camp)
          </div>
          <div className="mb-2">
            <strong>Who:</strong> Players of ages 5 - 13
          </div>
        </div>
        {registrationClosed ? (
          <div>
            <h2>Registration is now closed!</h2>
            <div>
              Thank you to all for applying to the Youth Camp. See you on July
              9th!
            </div>
          </div>
        ) : (
          <>
            <div className="text-xl font-semibold mb-6">Registration Form</div>
            <YouthCampForm />
          </>
        )}
      </div>
    </Layout>
  );
};

export default YouthCamp;
