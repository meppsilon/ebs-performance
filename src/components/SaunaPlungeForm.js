import React from 'react';
import { Form, Field } from 'react-final-form';
import { writeSaunaPlungeData } from '../utils/firebase';
import Input from './Input';
import { FORM_ERROR } from 'final-form';

const saunaLinka = {
  test: 'https://buy.stripe.com/test_8wMaFWgOnavNaekdQU',
  prod: 'https://buy.stripe.com/7sI1744ge00R5e8bIK',
};
const plungeLink = {
  test: 'https://buy.stripe.com/test_eVa7tKeGfbzRfyE005',
  prod: 'https://buy.stripe.com/5kA5nk1424h7gWQ5kn',
};

const SaunaPlungeForm = ({ date, type }) => {
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
        const passcode = data.passcode?.toLowerCase();
        if (passcode === 'secret passcode') {
          // add data to firebase
          const saunaPlunge = await writeSaunaPlungeData({
            ...data,
            type,
            date: date.getTime(),
          });
          await localStorage.setItem('sid', saunaPlunge.id);
          if (type === 'sauna') {
            window.location = window.location.host.startsWith('localhost')
              ? saunaLinka.test
              : saunaLinka.prod;
          } else {
            window.location = window.location.host.startsWith('localhost')
              ? plungeLink.test
              : plungeLink.prod;
          }
        } else {
          return {
            [FORM_ERROR]: 'Please enter correct passcode to schedule time!',
          };
        }
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
          <div className="mb-6">
            <Field
              name="passcode"
              placeholder="Enter code"
              label="Pass code"
              component={Input}
              type="text"
              containerClassName="w-full"
            />
          </div>
          {props.submitError && (
            <div className="text-red-600 text-center mt-2">
              {props.submitError}
            </div>
          )}
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

export default SaunaPlungeForm;
