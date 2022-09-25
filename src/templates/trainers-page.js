import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

const TrainersPage = ({ data }) => (
  <Layout className="bg-ebsBlack text-white">
    <div className="max-w-screen-md sm:mx-6 md:mx-auto relative">
      {data.markdownRemark.frontmatter.banner?.publicURL ? (
        <div
          style={{
            backgroundImage: `url(${data.markdownRemark.frontmatter.banner?.publicURL})`,
          }}
          className="absolute h-40 md:h-52 w-full bg-cover bg-center"
        />
      ) : (
        <div className="absolute h-40 md:h-52 bg-zinc-400 w-full" />
      )}
      <div className="flex flex-col z-10 pt-28 md:pt-36 px-4">
        <img
          src={data.markdownRemark.frontmatter.profile?.publicURL}
          className="w-24 h-24 md:w-32 md:h-32 rounded-sm bg-white mr-4 rounded-full ring-4 ring-ebsBlack z-10"
        />
        <div className="mt-4">
          <div className="font-bold text-xl flex items-center">
            {data.markdownRemark.frontmatter.name}
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://instagram.com/${data.markdownRemark.frontmatter.instagram}`}
              className="font-light text-base flex items-end no-underline ml-3"
            >
              <i className="fab fa-instagram mr-1" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div
          className="my-8"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        <div className="flex">
          <div className="font-semibold">Specialization:</div>
          &nbsp;
          {data.markdownRemark.frontmatter.specialization}
        </div>
      </div>
    </div>
  </Layout>
);

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
        banner {
          publicURL
        }
        body
        specialization
      }
    }
  }
`;
