import React, { Fragment, useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import Input from './Input';
import { getRegistrationData, writeRegistrationData } from '../utils/firebase';
import { navigate } from 'gatsby';

const RegistrationForm = () => {
  const [enrolleeEmails, setEnrolleeEmails] = useState([]);
  useEffect(() => {
    const getRegistrationWrapper = async () => {
      const registrationEnrollees = await getRegistrationData();
      const emails = registrationEnrollees
        .map((e) => e.email);
      setEnrolleeEmails(emails);
    };
    getRegistrationWrapper();
  }, []);
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
    } else if (enrolleeEmails.includes(values.email)) {
      errors.email = 'This email has already registered!';
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
          await writeRegistrationData(data);
          navigate('/registration/success');
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
                Submit
              </button>
            </div>
          </form>
        )}
      </Form>
    </Fragment>
  );
};

export default RegistrationForm;
