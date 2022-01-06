import { navigate } from 'gatsby';
import React from 'react';
import { Form, Field } from 'react-final-form';
import Input from './Input';
import Select from './Select';
import { writeBenchPressData } from '../utils/firebase';

const BenchContestForm = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required!';
    }
    if (!values.lastName) {
      errors.lastName = 'Required!';
    }
    if (!values.height) {
      errors.height = 'Required!';
    }
    if (!values.weight) {
      errors.weight = 'Required!';
    }
    if (!values.age) {
      errors.age = 'Required!';
    } else if (values.age < 14 || values.age > 18) {
      errors.age = 'You must be between 14 and 18 years of age';
    }
    if (!values.highSchool) {
      errors.highSchool = 'Required!';
    }
    if (!values.class) {
      errors.class = 'Required!';
    }
    if (!values.email) {
      errors.email = 'Required!';
    }
    return errors;
  };
  return (
    <Form
      onSubmit={async (data) => {
        console.log('data', data);
        await writeBenchPressData(data);
        fetch(
          'https://us-central1-ebs-performance.cloudfunctions.net/helloWorld',
          { method: 'POST' }
        );
      }}
      validate={validate}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
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
            <div className="mb-4 px-4 w-full md:w-1/3">
              <Field
                name="height"
                placeholder="Height"
                label="Height"
                component={Input}
                type="text"
                containerClassName="w-full"
              />
            </div>
            <div className="mb-4 px-4 w-full md:w-1/3">
              <Field
                name="weight"
                placeholder="Weight"
                label="Weight"
                component={Input}
                type="text"
                containerClassName="w-full"
              />
            </div>
            <div className="mb-4 px-4 w-full md:w-1/3">
              <Field
                name="age"
                placeholder="Age (14 - 18 years)"
                label="Age"
                component={Input}
                type="number"
                containerClassName="w-full"
              />
            </div>
            <div className="mb-4 px-4 w-full flex flex-wrap">
              <Field
                name="highSchool"
                placeholder="High school"
                label="High school"
                component={Input}
                type="text"
                containerClassName="w-full md:w-2/3 md:mr-6 mb-4 md:mb-0"
              />
              <Field
                name="class"
                placeholder="Class"
                label="Class"
                component={Select}
              />
            </div>
            <div className="mb-4 px-4 w-full">
              <Field
                name="email"
                placeholder="Email"
                label="Email"
                component={Input}
                type="email"
                containerClassName="w-full"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn-primary">
              Submit
            </button>
          </div>
        </form>
      )}
    </Form>
  );
};

export default BenchContestForm;
