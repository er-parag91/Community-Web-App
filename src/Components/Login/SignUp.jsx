import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../../Typography-UI/Header.scss';
import '../../Typography-UI/Button.scss';
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

  const { userData } = props;
  const {
    firstName, lastName, email, password, confirmPassword, phone, state, agree,
  } = userData;
  return (
    <div className="login__right--signup">
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
              id="firstName"
              label="First Name"
              autoComplete="first-name"
              placeholder="e.g. John"
              changeHandler={changeHandler}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <InputField
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
              id="password"
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
              label="Confirm Password"
              placeholder="e.g. Password123"
              autoComplete="new-password"
              changeHandler={changeHandler}
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
                  onChange={checkBoxHandler}
                  checked={!!agree}
                  id="agree"
                />
                <span className="checkbox__mock"><i className="fa fa-check checkbox__mock--icon" aria-hidden="true" /></span>
              </label>
              <p className="terms__condition">
                      I have read and accepted
                <span role="button" tabIndex={0} onKeyDown={termsAndConditionHandler} onClick={termsAndConditionHandler}>terms and conditions.</span>
              </p>
            </div>
          </Grid>
          <button type="submit" className="btn" style={{ margin: '2rem auto' }}>
            <span className="btn__visible">Free Sign Up</span>
          </button>
        </Grid>
      </Grid>
    </div>
  );
};

SignUp.propTypes = {
  userData: PropTypes.shape(),
  onTextChange: PropTypes.func.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
  onTermsAndConditionClicked: PropTypes.func.isRequired,
};

SignUp.defaultProps = {
  userData: {},
};

export default SignUp;
