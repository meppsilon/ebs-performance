import React from 'react';
import Layout from '../../components/Layout';
import RegistrationForm from '../../components/RegistrationForm';

const Registration = () => {
  return (
    <Layout className="bg-ebsBlack text-white">
      <div className="max-w-screen-md md:mx-auto mx-6 my-10">
        <div className="flex items-baseline mb-8">
          <h1 className="mb-0">Online Registration</h1>
        </div>
        <div className="mb-4">
          If you are interested in becoming a trainer at EBS Performance +
          Fitness, please fill out the form below.
        </div>
        <div className="mb-6">
          After the grand opening, we will reach out to you and explain what the
          next steps will look like.
        </div>
        <RegistrationForm />
      </div>
    </Layout>
  );
};

export default Registration;
