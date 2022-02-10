import React, { Fragment, useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import Input from './Input';
import Select from './Select';
import { getBenchPressData, writeBenchPressData } from '../utils/firebase';

const prodLink = 'https://buy.stripe.com/00gdTQbIG28ZbCw8wx';
const testLink = 'https://buy.stripe.com/test_8wM15m55FdHZ0DK3cc';

const BenchContestForm = () => {
  const [enrolleeEmails, setEnrolleeEmails] = useState([]);
  useEffect(() => {
    const getBenchPressWrapper = async () => {
      const benchPressEnrollees = await getBenchPressData();
      const emails = benchPressEnrollees
        .filter((e) => e.paid)
        .map((e) => e.email);
      setEnrolleeEmails(emails);
    };
    getBenchPressWrapper();
  }, []);
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
    if (!values.weightClass) {
      errors.weightClass = 'Required!';
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
    } else if (enrolleeEmails.includes(values.email)) {
      errors.email = 'This email has already registered!';
    }
    return errors;
  };
  return (
    <Fragment>
      <Form
        onSubmit={async (data) => {
          const benchPress = await writeBenchPressData(data);
          await localStorage.setItem('bid', benchPress.id);
          window.location = window.location.host.startsWith('localhost')
            ? testLink
            : prodLink;
        }}
        validate={validate}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit} className="mb-6">
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
              <div className="mb-4 px-4 w-full flex flex-wrap">
                <Field
                  name="highSchool"
                  placeholder="High school"
                  label="High school"
                  component={Input}
                  type="text"
                  containerClassName="flex-1 md:mr-6 mr-4 mb-4 md:mb-0 max-w-lg"
                />
                <Field
                  name="class"
                  placeholder="Class"
                  label="Class"
                  component={Select}
                  options={[
                    <option />,
                    <option value="22">'22</option>,
                    <option value="23">'23</option>,
                    <option value="24">'24</option>,
                    <option value="25">'25</option>,
                    <option value="26">'26</option>,
                  ]}
                  errorSide
                />
              </div>
              <div className="mb-4 px-4 flex flex-wrap">
                <Field
                  name="height"
                  placeholder="Height"
                  label="Height"
                  component={Select}
                  options={[
                    <option></option>,
                    <option value={`4'0"`}>4'0"</option>,
                    <option value={`4'1"`}>4'1"</option>,
                    <option value={`4'2"`}>4'2"</option>,
                    <option value={`4'3"`}>4'3"</option>,
                    <option value={`4'4"`}>4'4"</option>,
                    <option value={`4'5"`}>4'5"</option>,
                    <option value={`4'6"`}>4'6"</option>,
                    <option value={`4'7"`}>4'7"</option>,
                    <option value={`4'8"`}>4'8"</option>,
                    <option value={`4'9"`}>4'9"</option>,
                    <option value={`4'10"`}>4'10"</option>,
                    <option value={`4'11"`}>4'11"</option>,
                    <option value={`4'12"`}>4'12"</option>,
                    <option value={`5'0"`}>5'0"</option>,
                    <option value={`5'1"`}>5'1"</option>,
                    <option value={`5'2"`}>5'2"</option>,
                    <option value={`5'3"`}>5'3"</option>,
                    <option value={`5'4"`}>5'4"</option>,
                    <option value={`5'5"`}>5'5"</option>,
                    <option value={`5'6"`}>5'6"</option>,
                    <option value={`5'7"`}>5'7"</option>,
                    <option value={`5'8"`}>5'8"</option>,
                    <option value={`5'9"`}>5'9"</option>,
                    <option value={`5'10"`}>5'10"</option>,
                    <option value={`5'11"`}>5'11"</option>,
                    <option value={`6'0"`}>6'0"</option>,
                    <option value={`6'1"`}>6'1"</option>,
                    <option value={`6'2"`}>6'2"</option>,
                    <option value={`6'3"`}>6'3"</option>,
                    <option value={`6'4"`}>6'4"</option>,
                    <option value={`6'5"`}>6'5"</option>,
                    <option value={`6'6"`}>6'6"</option>,
                    <option value={`6'7"`}>6'7"</option>,
                    <option value={`6'8"`}>6'8"</option>,
                    <option value={`6'9"`}>6'9"</option>,
                    <option value={`6'10"`}>6'10"</option>,
                    <option value={`6'11"`}>6'11"</option>,
                    <option value={`7'0"`}>7'0"</option>,
                  ]}
                  containerClassName="md:mr-6 mr-4"
                />
                <Field
                  name="weightClass"
                  placeholder="Weight Class"
                  label="Weight Class"
                  component={Select}
                  options={[
                    <option></option>,
                    <option value="150 and under">150 and under</option>,
                    <option value="151 to 180">151 to 180</option>,
                    <option value="181 to 210">181 to 210</option>,
                    <option value="211 to 240">211 to 240</option>,
                    <option value="241 and above">241 and above</option>,
                  ]}
                  containerClassName="md:mr-6 mr-4"
                />
                <Field
                  name="age"
                  placeholder="Age"
                  label="Age"
                  component={Select}
                  options={[
                    <option></option>,
                    <option value="14">14</option>,
                    <option value="15">15</option>,
                    <option value="16">16</option>,
                    <option value="17">17</option>,
                    <option value="18">18</option>,
                  ]}
                  containerClassName="md:mr-6 mr-4"
                />
              </div>
              <div className="mb-4 px-4 w-full max-w-md">
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
    </Fragment>
  );
};

export default BenchContestForm;
