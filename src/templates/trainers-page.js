import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

const TrainersPage = ({ data }) => {
  return (
    <Layout className="bg-ebsBlack text-white">
      <div className="max-w-screen-md md:mx-auto mx-6 my-10">
        <div className="flex">
          <img
            src={data.markdownRemark.frontmatter.profile.publicURL}
            className="w-16 h-16 rounded-sm bg-white mr-4"
          />
          <div>
            <div className="font-medium">
              {data.markdownRemark.frontmatter.name}
            </div>
            <a
              target="_blank"
              href={`https://instagram.com/${data.markdownRemark.frontmatter.instagram}`}
              className="font-light text-sm"
            >
              @{data.markdownRemark.frontmatter.instagram}
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TrainersPage;

export const pageQuery = graphql`
  query TrainersPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        instagram
        name
        profile {
          publicURL
        }
        bio
        specialization
      }
    }
  }
`;
