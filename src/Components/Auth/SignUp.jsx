/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../../UI/Header.scss';
import '../../UI/Button.scss';
import PropTypes from 'prop-types';
import { statesList } from './Fixtures/statesList';
import InputField from './TextField';

const SignUp = (props) => {
  const changeHandler = (key, target) => {
    props.onTextChange(key, target.value);
  };

  const checkBoxHandler = () => {
    props.onCheckboxChange();
  };

  const termsAndConditionHandler = () => {
    props.onTermsAndConditionClicked();
  };

  const handleSubmit = (e) => {
    props.onHandleSubmit(e);
  };

  const { userData } = props;
  const {
    firstName, lastName, email, password, confirmPassword, phone, state, agree,
  } = userData;
  return (
    <div className="login__right--signup">
      <form onSubmit={(e) => handleSubmit(e)}>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="center"
          className="login__right--signup-form"
        >
          <span className="heading-secondary">sign-up</span>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={6}>
              <InputField
                value={firstName}
                autoFocus
                type="text"
                id="firstName"
                label="First Name"
                autoComplete="first-name"
                placeholder="e.g. John"
                changeHandler={changeHandler}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <InputField
                type="text"
                value={lastName}
                id="lastName"
                label="Last Name"
                placeholder="e.g. Smith"
                autoComplete="family-name"
                changeHandler={changeHandler}
              />
            </Grid>
          </Grid>
          <InputField
            value={email}
            type="email"
            id="email"
            label="E-Mail Address"
            placeholder="e.g. john@smith.com"
            autoComplete="email"
            changeHandler={changeHandler}
          />
          <Grid container spacing={1}>
            <Grid item xs={6} sm={6}>
              <InputField
                value={password}
                type="password"
                id="password"
                inputProps={{
                  minLength: 8,
                }}
                label="Password"
                placeholder="e.g. Password123"
                autoComplete="new-password"
                changeHandler={changeHandler}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <InputField
                value={confirmPassword}
                id="confirmPassword"
                type="password"
                inputProps={{
                  minLength: 8,
                }}
                label="Confirm Password"
                placeholder="e.g. Password123"
                autoComplete="new-password"
                changeHandler={changeHandler}
                error={confirmPassword !== password}
                helperText={confirmPassword !== password ? 'Password does not match' : ''}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={8} sm={8}>
              <InputField
                value={phone}
                id="phone"
                label="Phone"
                placeholder="e.g. 888-888-8888"
                autoComplete="phone"
                changeHandler={changeHandler}
              />
            </Grid>
            <Grid item xs={4} sm={4}>
              <InputField
                value={state}
                id="state"
                select
                label="State"
                SelectProps={{
                  native: true,
                }}
                required
                fullWidth
                variant="filled"
                InputLabelProps={{ shrink: true }}
                changeHandler={changeHandler}
              >
                {statesList.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </InputField>
            </Grid>
            <Grid xs={12} sm={12}>
              <div style={{ marginTop: '1rem' }}>
                <label htmlFor="agree">
                  <input
                    type="checkbox"
                    required
                    onChange={checkBoxHandler}
                    checked={!!agree}
                    id="agree"
                  />
                  <span className="checkbox__mock"><i className="fa fa-check checkbox__mock--icon" aria-hidden="true" /></span>
                </label>
                <p className="terms__condition">
                      I have read and accepted
                  <span onClick={termsAndConditionHandler}>terms and conditions.</span>
                </p>
              </div>
            </Grid>
            <button type="submit" className="btn" style={{ margin: '2rem auto' }}>
              <span className="btn__text">Free Sign Up</span>
            </button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

SignUp.propTypes = {
  userData: PropTypes.shape(),
  onTextChange: PropTypes.func.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
  onTermsAndConditionClicked: PropTypes.func.isRequired,
  onHandleSubmit: PropTypes.func.isRequired,
};

SignUp.defaultProps = {
  userData: {},
};

export default SignUp;
