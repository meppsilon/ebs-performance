import React from 'react';
import Layout from '../../components/Layout';
import proteinPowderImage from '../../img/protein-powder.jpg';
import nutritionFactsImage from '../../img/nutrition-facts.png';
import proteinLabelImage from '../../img/protein-label.png';
import proteinIngredients from '../../img/protein-ingredients.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const images = [
  proteinPowderImage,
  proteinLabelImage,
  proteinIngredients,
  nutritionFactsImage,
];

const buyLinkProd = 'https://buy.stripe.com/14kbLIfYW14V8qk3cl';
const buyLinkTest = 'https://buy.stripe.com/test_6oEcO4gOn5bt86cdQW';

const ProteinPowder = () => (
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
          <div className="flex items-baseline mb-4">
            <h1 className="mb-0">EBS Pro Whey Protein Powder - Vanilla</h1>
          </div>
          <div className="text-xl mb-6">$75</div>
          <div className="mb-4">
            <em>
              Banned Substance Tested by&nbsp;
              <strong>
                <a href="https://sport.wetestyoutrust.com/">Informed Sport</a>
              </strong>
            </em>
          </div>
          <div className="mb-4">
            <em>29g of Protein per Serving</em>
          </div>
          <div className="mb-4">
            <em>
              <strong>Ingredients:</strong> Whey Protein Isolate, Natural
              Flavors,
              <br />
              Stevia, Sunflower Oil.
            </em>
          </div>
          <div className="mb-4">
            <em>
              <strong>Flavor:</strong> Vanilla
            </em>
          </div>
          <div className="mb-8">
            <em>
              <strong>Allergens:</strong> Contains Milk
            </em>
          </div>
          <button
            className="btn-primary"
            onClick={() => {
              window.location = window.location.hostname.startsWith('localhost')
                ? buyLinkTest
                : buyLinkProd;
            }}
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  </Layout>
);

export default ProteinPowder;
