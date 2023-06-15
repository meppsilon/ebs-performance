import React, { Fragment } from 'react';
import { Form, Field } from 'react-final-form';
import Input from './Input';
import { updateYouthCampData } from '../utils/firebase';
import { navigate } from 'gatsby';

// const prodLink = 'https://buy.stripe.com/4gw2b88wu8xncGA28d';
// const testLink = 'https://buy.stripe.com/test_4gwaFWcy7cDV1HOaEH';

const YouthCampForm = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.printName) {
      errors.printName = 'Required!';
    }
    if (!values.date) {
      errors.date = 'Required!';
    }
    return errors;
  };
  return (
    <Fragment>
      <div className="mb-6">
        I, the undersigned, in consideration of being allowed to participate in
        activities at EBS Performance and Fitness (EBS) I acknowledge that the
        training, conditioning and events will involve strenuous and hazardous
        physical activity. I certify that to the best of my knowledge I am in
        excellent physical health and have no physical limitations that would
        prevent them from participating in the any and all activates at or
        coordinated by EBS. By signing below I am further acknowledging that I
        have read this statement and that I willbe legally bound for myself, my
        heirs, executor and administrators, do hereby discharge, indemnify, hold
        harmless, and release EBS and all of its respective affiliates,
        officers, directors, employees, agents, affiliated cities, counties and
        states including their representatives from any and all liability for
        all claims, demands, losses, damages, and costs, including reasonable
        attorneys fees, that arise out of or in connection with any personal
        injury, death, property damage, and/or loss suffered in connection with
        the my participation in any and all activities. I expressly assume all
        risks of my participation in this activity, including, without
        limitation, injury as a result of the acts of omission of the above
        parties or some defect in or on their property of any of them, whether
        caused by negligence or otherwise, except for illness and injury
        resulting directly from solely gross negligence or willful misconduct on
        the part of EBS or aforementioned affiliates. I agree to indemnify,
        save, hold harmless and defend each and every of the above parties of
        and from any and all losses, damages, expenses, medical expenses, costs,
        and attorney’s fees arising out or resulting from my participation in
        EBS activates. Furthermore, I acknowledge that I am participating at my
        own risk and understand that EBS and its affiliates are not responsible
        for the conduct of another participant or spectators. I certify that I
        have read and understand this waiver and release and have placed my
        signature below.
      </div>
      <Form
        onSubmit={async () => {
          const yid = localStorage.getItem('yid');
          await updateYouthCampData(yid, { waiverSigned: true });
          navigate('/youth-camp/success');
        }}
        validate={validate}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit} className="mb-6 text-ebsBlack">
            <div className="flex flex-wrap -mx-4 mb-4">
              <div className="mb-4 px-4 w-full md:w-1/2">
                <Field
                  name="printName"
                  placeholder="Print name"
                  label="Print name"
                  component={Input}
                  type="text"
                  containerClassName="w-full"
                />
              </div>
              <div className="mb-4 px-4 w-full md:w-1/2">
                <Field
                  name="date"
                  placeholder="Date"
                  label="Date"
                  component={Input}
                  type="text"
                  containerClassName="w-full"
                />
              </div>
            </div>
            <div className="text-white mb-6">
              By clicking the button below, you agree to the terms of our Youth
              Camp Waiver Form.
            </div>
            <div className="flex justify-end">
              <button type="submit" className="btn-primary">
                Sign waiver
              </button>
            </div>
          </form>
        )}
      </Form>
    </Fragment>
  );
};

export default YouthCampForm;
