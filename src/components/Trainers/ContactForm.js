import React, { Fragment } from 'react';
import { Form, Field } from 'react-final-form';
import Input from '../Input';
import { writeContactData } from '../../utils/firebase';
import TextArea from '../TextArea';
import { navigate } from 'gatsby';

const ContactForm = ({ trainer }) => {
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
        await writeContactData({ ...data, trainer });
        navigate('/trainers/success');
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
            <div className="mb-4 px-4 w-full">
              <Field
                name="message"
                placeholder="Leave your message"
                label="Message"
                component={TextArea}
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

export default ContactForm;
