import React from 'react';
import Layout from '../../components/Layout';
import YouthCampForm from '../../components/YouthCampForm';

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
            <strong>Where:</strong> Costa Mesa High School
          </div>
          <div className="mb-2">
            <strong>When:</strong> July 9th, 2022 from 10am - 1pm
          </div>
          <div className="mb-2">
            <strong>Who:</strong> Players of ages 6 - 15
          </div>
        </div>
        <div>
          <h2>Registration closed!</h2>
          <div>Thank you to all for applying to the Youth Camp. See you tomorrow!</div>
        </div>
      </div>
    </Layout>
  );
};

export default YouthCamp;
