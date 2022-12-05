import React from 'react';
import Trainer from './Trainer';

const Trainers = ({ trainers }) => {
  return (
    <div className="flex flex-wrap -m-4">
      {trainers.map((trainer) => (
        <Trainer
          key={trainer.node.frontmatter.name}
          {...trainer.node.frontmatter}
        />
      ))}
    </div>
  );
};

export default Trainers;
