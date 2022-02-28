import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import FullWidthImage from '../components/FullWidthImage';
import ownersImage from '../img/ebs-owners.jpg';

// eslint-disable-next-line
export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="bg-ebsBlack text-white">
      <div className="mt-12 text-left md:text-center mx-auto">
        <h1 className="text-3xl mb-10 text-center">{title}</h1>
        <div className="section mx-6 sm:mx-auto sm:w-3/4 md:flex md:justify-between md:text-left md:items-start">
          <img
            src={ownersImage}
            className="inline-block owners-img md:max-w-lg md:w-1/2 mb-10 md:mb-0 object-contain w-full"
          />
          <PageContent className="content max-w-lg md:ml-16" content={content} />
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout className="bg-ebsBlack">
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
