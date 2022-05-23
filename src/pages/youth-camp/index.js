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
          <div className="text-xl font-semibold">Event information</div>
          <div><strong>Where:</strong> Costa Mesa High School</div>
          <div><strong>When:</strong> July 9th, 2022 from 10-1pm</div>
          <div><strong>Who:</strong> Players ages 6-15</div>
        </div>
        <YouthCampForm />
      </div>
    </Layout>
  );
};

export default YouthCamp;
