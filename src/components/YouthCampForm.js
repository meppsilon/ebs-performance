import React, { Fragment, useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import Input from './Input';
import { getYouthCampData, writeYouthCampData } from '../utils/firebase';
import Select from './Select';
import { navigate } from 'gatsby';

const YouthCampForm = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required!';
    }
    if (!values.lastName) {
      errors.lastName = 'Required!';
    }
    if (!values.position) {
      errors.position = 'Required!';
    }
    if (!values.birthDate) {
      errors.birthDate = 'Required!';
    }
    if (!values.shirtSize) {
      errors.shirtSize = 'Required!';
    }
    if (!values.gradeLevel) {
      errors.gradeLevel = 'Required!';
    }
    if (!values.email) {
      errors.email = 'Required!';
    }
    if (!values.phone) {
      errors.phone = 'Required!';
    }
    return errors;
  };
  return (
    <Fragment>
      <Form
        onSubmit={async (data) => {
          const youthCampData = await writeYouthCampData(data);
          await localStorage.setItem('yid', youthCampData.id);
          navigate('/youth-camp/waiver');
        }}
        validate={validate}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit} className="mb-6 text-ebsBlack">
            <div className="flex flex-wrap -mx-4 mb-4">
              <div className="mb-4 px-4 w-full md:w-1/2">
                <Field
                  name="firstName"
                  placeholder="First name"
                  label="First name"
                  component={Input}
                  type="text"
                  containerClassName="w-full"
                />
              </div>
              <div className="mb-4 px-4 w-full md:w-1/2">
                <Field
                  name="lastName"
                  placeholder="Last name"
                  label="Last name"
                  component={Input}
                  type="text"
                  containerClassName="w-full"
                />
              </div>
              <div className="mb-4 px-4 w-full">
                <Field
                  name="position"
                  placeholder="Position"
                  label="Position"
                  component={Input}
                  type="text"
                  containerClassName="w-full"
                />
              </div>
              <div className="mb-4 px-4 w-full md:w-1/2">
                <Field
                  name="birthDate"
                  placeholder="Date of birth"
                  label="Date of birth"
                  component={Input}
                  type="text"
                  containerClassName="w-full"
                />
              </div>
              <div className="flex">
                <div className="mb-4 px-4" style={{ minWidth: 150 }}>
                  <Field
                    name="shirtSize"
                    placeholder="T-Shirt size"
                    label="T-Shirt size"
                    component={Select}
                    options={[
                      <option></option>,
                      <option value="2XS">2XS</option>,
                      <option value="XS">XS</option>,
                      <option value="S">S</option>,
                      <option value="M">M</option>,
                      <option value="L">L</option>,
                      <option value="XL">XL</option>,
                      <option value="2XL">2XL</option>,
                      <option value="3XL">3XL</option>,
                      <option value="4XL">4XL</option>,
                    ]}
                    containerClassName="w-full"
                  />
                </div>
                <div className="mb-4 px-4 w-full flex-1">
                  <Field
                    name="gradeLevel"
                    placeholder="Grade level"
                    label="Grade level (in fall)"
                    component={Input}
                    type="text"
                    containerClassName="w-full"
                  />
                </div>
              </div>
              <div className="mb-4 px-4 w-full md:w-1/2">
                <Field
                  name="email"
                  placeholder="Email"
                  label="Email"
                  component={Input}
                  type="email"
                  containerClassName="w-full"
                />
              </div>
              <div className="mb-4 px-4 w-full md:w-1/2">
                <Field
                  name="phone"
                  placeholder="Phone number"
                  label="Phone number"
                  component={Input}
                  type="text"
                  containerClassName="w-full"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="btn-primary">
                Sign up
              </button>
            </div>
          </form>
        )}
      </Form>
    </Fragment>
  );
};

export default YouthCampForm;
