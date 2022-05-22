import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import FullWidthImage from '../components/FullWidthImage';
import WhatWeOffer from '../components/WhatWeOffer';

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
        <div className=""></div>
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
