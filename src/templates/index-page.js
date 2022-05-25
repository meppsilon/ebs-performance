import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import FullWidthImage from '../components/FullWidthImage';
import WhatWeOffer from '../components/WhatWeOffer';
import youthCampFlyer from '../img/youth-camp-flyer.jpg';

// eslint-disable-next-line
export const IndexPageTemplate = ({ image }) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImage img={heroImage} title="EBS Performance + Fitness" />
      <div className="px-6 md:px-16 py-36 md:py-48 w-full bg-ebsBlack text-white md:flex">
        <div className="text-3xl md:text-4xl md:w-7/12 md:pr-4 !leading-relaxed">
          <strong>EBS Performance + Fitness</strong> is a private training
          facility in Costa Mesa, CA.
        </div>
        <div className="text-2xl font-light mt-12 md:mt-0 md:w-5/12 md:pl-4 leading-normal">
          We provide premier sports performance training, personal training +
          group fitness classes for Orange County.
        </div>
      </div>
      <div className="px-6 md:px-16 pb-12 md:pb-20 w-full bg-ebsBlack text-white">
        <div className="w-full border-t border-white pt-12 md:pb-20" />
        <div className="text-3xl font-bold text-center mb-10">Upcoming Events</div>
        <div className="text-center md:text-left md:flex justify-around items-center">
          <div className="md:mr-10">
            <div className="text-2xl font-semibold mb-4">Youth Football Camp</div>
            <div className="mb-8">
              Sponsored by <strong>EBS Performance + Fitness</strong> and&nbsp;
              <strong>Newport Mesa Pop Warner Football</strong>
            </div>
            <div className="mb-6">
              <div className="text-lg font-bold">Updated prices</div>
              <div><span className="font-semibold">Early bird (before June 20th):</span> $50</div>
              <div><span className="font-semibold">Regular (after June 20th):</span> $75</div>
            </div>
            <Link to="/youth-camp" className="btn-primary inline-block mb-8 no-underline">
              Register
            </Link>
          </div>
          <img
            src={youthCampFlyer}
            className="w-1/2"
            style={{ maxWidth: '350px' }}
          />
        </div>
      </div>
      <WhatWeOffer />
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
