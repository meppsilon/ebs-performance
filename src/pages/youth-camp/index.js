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
        <div className="mb-4">
          More information about Youth Camp
        </div>
        <YouthCampForm />
      </div>
    </Layout>
  );
};

export default YouthCamp;
