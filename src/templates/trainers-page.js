import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import ContactForm from '../components/Trainers/ContactForm';

const TrainersPage = ({ data }) => (
  <Layout className="bg-ebsBlack text-white">
    <div className="max-w-screen-md sm:mx-6 md:mx-auto relative">
      <div className="absolute h-32 md:h-40 bg-primary w-full" />
      <Link
        to="/trainers"
        className="text-white hover:text-white/70 z-10 absolute left-5 top-5 no-underline"
      >
        <i className="fas fa-chevron-left" /> Back
      </Link>
      <div className="flex flex-col z-10 pt-20 md:pt-28 px-4">
        <img
          src={data.markdownRemark.frontmatter.profile?.publicURL}
          className="w-24 h-24 md:w-32 md:h-32 rounded-sm bg-white mr-4 rounded-full ring-4 ring-ebsBlack z-10"
        />
        <div className="mt-4 mb-8">
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
        <h1>Contact</h1>
        <ContactForm trainer={data.markdownRemark.frontmatter} />
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
        specialization
        email
      }
    }
  }
`;
