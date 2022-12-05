import React from 'react';
import classnames from 'classnames';

const TextArea = ({
  containerClassName,
  input,
  meta,
  placeholder,
  label,
  labelClassName,
  inputClassName,
  labelRight = false,
}) => (
  <div className={containerClassName}>
    {!labelRight && (
      <div
        className={classnames('mb-2 text-white font-semibold', labelClassName)}
      >
        {label}
      </div>
    )}
    <textarea
      id="default"
      className={classnames(
        'px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-gray-200 w-full',
        {
          'border-red-500 text-red-600 placeholder-red-600 mb-1':
            meta.error && meta.touched,
          'border-gray-300': !meta.error || !meta.touched,
        },
        inputClassName
      )}
      placeholder={placeholder}
      {...input}
      rows="4"
    />
    {labelRight && (
      <div
        className={classnames('mb-2 text-white font-semibold', labelClassName)}
      >
        {label}
      </div>
    )}
    {meta.error && meta.touched && (
      <span className="text-red-600 text-center mt-2">{meta.error}</span>
    )}
  </div>
);

export default TextArea;
