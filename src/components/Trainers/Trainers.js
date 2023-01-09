import React from 'react';
import orderBy from 'lodash/orderBy';
import Trainer from './Trainer';

const Trainers = ({ trainers }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {orderBy(trainers, ['node.frontmatter.name'], ['desc']).map((trainer) => (
        <Trainer
          key={trainer.node.frontmatter.name}
          {...trainer.node.frontmatter}
        />
      ))}
    </div>
  );
};

export default Trainers;
