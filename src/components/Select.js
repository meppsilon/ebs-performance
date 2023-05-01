import React from 'react';
import classnames from 'classnames';

const Select = ({
  input,
  meta,
  label,
  containerClassName,
  options,
  errorSide,
}) => (
  <div key={`select-${input.name}`} className={containerClassName}>
    <div className="mb-2 text-white font-semibold">{label}</div>
    <select
      {...input}
      className={classnames(
        'px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-gray-200',
        {
          'border-red-500 text-red-600 placeholder-red-600 mb-1':
            meta.error && meta.touched,
          'border-gray-300': !meta.error || !meta.touched,
        }
      )}
    >
      {options}
    </select>
    {meta.error &&
      meta.touched &&
      (errorSide ? (
        <span className="text-red-600 text-center ml-2">{meta.error}</span>
      ) : (
        <div className="text-red-600 mt-1">{meta.error}</div>
      ))}
  </div>
);

export default Select;
