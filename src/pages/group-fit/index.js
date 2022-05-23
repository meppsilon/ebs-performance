import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';

const GroupFit = () => {
  return (
    <Layout className="bg-ebsBlack">
      <div className="max-w-screen-md md:mx-auto mx-6 my-10">
        <h1>EBS Group Fitness</h1>
        <div className="bg-white">
          <div>
            <Helmet>
              <script
                src="https://widgets.mindbodyonline.com/javascripts/healcode.js"
                type="text/javascript"
              ></script>
            </Helmet>
            <healcode-widget
              data-type="schedules"
              data-widget-partner="object"
              data-widget-id="a2176815e032"
              data-widget-version="1"
            ></healcode-widget>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GroupFit;
