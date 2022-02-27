import React from 'react';
import { Form, Field } from 'react-final-form';
import { writeTurfSpaceData } from '../utils/firebase';
import Input from './Input';

const testLink = 'https://buy.stripe.com/test_7sIaFW55FfQ786c7st';

const TurfSpaceForm = ({ date }) => {
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required!';
    }
    if (!values.lastName) {
      errors.lastName = 'Required!';
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
    <Form
      onSubmit={async (data) => {
        console.log('data', data);
        console.log('date', date);
        // add data to firebase
        const turfSpace = await writeTurfSpaceData({ ...data, date: date.getTime() });
        console.log('turfSpace', turfSpace);
        await localStorage.setItem('tid', turfSpace.id);
        // window.location = window.location.host.startsWith('localhost')
        //   ? testLink
        //   : prodLink;
        window.location = testLink;
      }}
      validate={validate}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit} className="mb-6 text-black">
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
              Checkout
            </button>
          </div>
        </form>
      )}
    </Form>
  );
};

export default TurfSpaceForm;
