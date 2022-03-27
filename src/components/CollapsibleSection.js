import React from 'react';
import classNames from 'classnames';

const CollapsibleSection = ({ title, children, isShowing, onChange }) => {
  return (
    <div
      className={classNames('mb-5 rounded-sm border border-ebsBlack hover:border-white p-4', {
        '!border-white': isShowing,
      })}
    >
      <div
        className={classNames(
          'flex items-center cursor-pointer transition-all',
          {
            underline: !isShowing,
          }
        )}
        onClick={onChange}
      >
        <i
          className={classNames('fa text-white mr-3 transition-all', {
            'fa-plus': !isShowing,
            'fa-minus': isShowing,
          })}
          aria-hidden="true"
        />
        <h2 className="mb-0 link">{title}</h2>
      </div>
      <div className={classNames('transition-all', { hidden: !isShowing })}>
        <div className="ml-6 text-white">{children}</div>
      </div>
    </div>
  );
};

export default CollapsibleSection;
