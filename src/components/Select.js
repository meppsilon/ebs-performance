import React from 'react';
import classnames from 'classnames';

const Select = ({ input, meta, label, containerClassName }) => (
  <div className={containerClassName}>
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
      <option />
      <option value="22">'22</option>
      <option value="23">'23</option>
      <option value="24">'24</option>
      <option value="25">'25</option>
      <option value="26">'26</option>
    </select>
    {meta.error && meta.touched && (
      <span className="text-red-600 text-center ml-2">{meta.error}</span>
    )}
  </div>
);

export default Select;
