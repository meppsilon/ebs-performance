import React from 'react';
import Layout from '../../components/Layout';
import { StaticQuery, graphql } from 'gatsby';
import Trainers from '../../components/Trainers';

const TrainersPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query TrainersQuery {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "trainers-page" } } }
          ) {
            edges {
              node {
                frontmatter {
                  name
                  instagram
                  profile {
                    publicURL
                  }
                  bio
                  specialization
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const trainers = data.allMarkdownRemark.edges;
        return (
          <Layout className="bg-ebsBlack text-white">
            <div className="max-w-screen-md md:mx-auto mx-6 my-10">
              <h1>Trainers</h1>
              <Trainers trainers={trainers} />
            </div>
          </Layout>
        );
      }}
    />
  );
};

export default TrainersPage;
