import React from 'react';
import Layout from '../../components/Layout';
import YouthCampWaiverForm from '../../components/YouthCampWaiverForm';

const YouthCamp = () => {
  return (
    <Layout className="bg-ebsBlack text-white">
      <div className="max-w-screen-md md:mx-auto mx-6 my-10">
        <div className="flex items-baseline mb-8">
          <h1 className="mb-0">Youth Camp Waiver Form</h1>
        </div>
        <YouthCampWaiverForm />
      </div>
    </Layout>
  );
};

export default YouthCamp;
