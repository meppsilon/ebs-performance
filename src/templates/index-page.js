import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import event from '../img/event.jpg';

import Layout from '../components/Layout';
// import Features from "../components/Features";
// import BlogRoll from "../components/BlogRoll";
import FullWidthImage from '../components/FullWidthImage';

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImage img={heroImage} />
      <section className="md:px-16 md:py-16 px-4 py-8 bg-secondary" style={{
        backgroundImage: `linear-gradient(to bottom right, #6D6D6D, #d3d3d3)`,
      }}>
        <h2 className="text-white text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
        <div className="flex flex-col md:flex-row md:justify-center">
          <img src={event} style={{ maxWidth: 410 }} />
          <div className="mt-6 md:mt-0 md:ml-20">
            <h2 className="text-white text-xl font-bold mb-4">
              Bench Press Contest
            </h2>
            <div className="text-white mb-1">March 5, 2022</div>
            <div className="text-white mb-3">Starts at 9am</div>
            <Link
              to="/bench-press"
              className="text-white bg-primary px-4 py-2 rounded hover:bg-primaryDark"
            >
              Register Here
            </Link>
          </div>
        </div>
      </section>
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
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
