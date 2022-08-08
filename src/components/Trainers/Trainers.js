import React, { useState } from 'react';
import Trainer from './Trainer';

const Trainers = ({ trainers }) => {
  const [activeTrainer, setActiveTrainer] = useState();
  return (
    <div className="flex flex-wrap -mx-4">
      {trainers.map((trainer) => (
        <Trainer
          key={trainer.node.frontmatter.name}
          {...trainer.node.frontmatter}
          active={activeTrainer === trainer.node.frontmatter.name}
          onClick={() => setActiveTrainer(trainer.node.frontmatter.name)}
        />
      ))}
    </div>
  );
};

export default Trainers;
