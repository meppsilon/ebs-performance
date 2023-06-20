import React from 'react';
import Layout from '../../components/Layout';
import proteinPowderImage from '../../img/protein-powder.jpg';
import nutritionFactsImage from '../../img/nutrition-facts.png';
import proteinLabelImage from '../../img/protein-label.png';
import proteinIngredients from '../../img/protein-ingredients.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const images = [
  proteinPowderImage,
  proteinLabelImage,
  proteinIngredients,
  nutritionFactsImage,
];

const buyLink = 'https://buy.stripe.com/test_6oEcO4gOn5bt86cdQW';

const ProteinPowder = () => {
  return (
    <Layout className="bg-ebsBlack text-white">
      <div className="max-w-screen-lg md:mx-auto mx-6 my-10">
        <div className="mb-4 flex flex-wrap justify-between">
          <Carousel width="400px">
            {images.map((x) => (
              <div key={x} className="flex items-center">
                <img src={x} />
              </div>
            ))}
          </Carousel>
          <div>
            <div className="flex items-baseline mb-8">
              <h1 className="mb-0">EBS Pro Whey Protein Powder - Vanilla</h1>
            </div>
            <ul className="font-semibold text-xl mb-6">
              <li>
                Banned Substance Tested by&nbsp;
                <a href="https://sport.wetestyoutrust.com/">Informed Sport</a>
              </li>
              <li>29g of protein per Serving</li>
              <li>4 Simple Ingredients</li>
            </ul>
            <button
              className="btn-primary"
              onClick={() => {
                window.location = buyLink;
              }}
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProteinPowder;
