import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import { updateTurfSpaceData } from '../../utils/firebase';

const TurfSpaceSuccess = () => {
  return (
    <Layout className="bg-ebsBlack">
      <div className="max-w-screen-md md:mx-auto mx-6 my-10">
        <h1 className="text-2xl text-white font-bold mb-10">Success!</h1>
        <h2 className="text-xl text-white font-semibold mb-8">
          Thank you for expressing interest in EBS Performance + Fitness. We
          will be following up with you shortly to explain the next steps.
        </h2>
      </div>
    </Layout>
  );
};

export default TurfSpaceSuccess;
