import { navigate } from 'gatsby';
import React from 'react';
import { Form, Field } from 'react-final-form';
import { writeTurfSpaceData, updateTurfSpaceData } from '../utils/firebase';
import Input from './Input';

const allOff = ['ebs1216'];
const halfOff = ['half off', 'halfoff', 'half-off'];

const fullPriceLink = {
  test: 'https://buy.stripe.com/test_7sIaFW55FfQ786c7st',
  prod: 'https://buy.stripe.com/7sI1744ge00R5e8bIK',
};
const halfPriceLink = {
  test: 'https://buy.stripe.com/test_bIY4hygOn1Zh0DKeUW',
  prod: 'https://buy.stripe.com/5kA5nk1424h7gWQ5kn',
};

const findLink = (coupon) => {
  const allEnvLink = halfOff.includes(coupon) ? halfPriceLink : fullPriceLink;
  const env = window.location.host.startsWith('localhost') ? 'test' : 'prod';
  return allEnvLink[env];
};

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
        const coupon = data.discount?.toLowerCase();
        // add data to firebase
        const turfSpace = await writeTurfSpaceData({
          ...data,
          date: date.getTime(),
        });
        await localStorage.setItem('tid', turfSpace.id);
        if (allOff.includes(coupon)) {
          updateTurfSpaceData(turfSpace.id, { paid: true });
          navigate('/turf-space/success');
        } else {
          window.location = findLink(data.discount?.toLowerCase());
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
              name="discount"
              placeholder="Enter code"
              label="Discount code"
              component={Input}
              type="text"
              containerClassName="w-full"
            />
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
