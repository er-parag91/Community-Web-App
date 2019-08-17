import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import PropTypes from 'prop-types';

const ForgotPassword = (props) => {
  const { isForgotPassword } = props;
  const forgotPasswordToggle = () => {
    props.onForgotPasswordToggle();
  };
  console.log(props);
  return (
    <div>
      <Dialog className="fogot__password" open={isForgotPassword} onClose={forgotPasswordToggle} aria-labelledby="form-dialog-title">
        <span className="heading-tertiary">Forgot Password</span>
        <DialogContent>
          <p>
            Please enter your email address which is registered with us.
            If entered email is registered and correct, only then you will
            recieve password recovery email from us.
          </p>
          <br />
          <p>
            Please allow it upto 10 minutes to send you recovery email.
            If you still not recieve email from us, Please contact Admin of site.
          </p>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            placeholder="e.g. john@smith.com"
            label="Email Address"
            type="email"
            fullWidth
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={forgotPasswordToggle} color="primary">
            Cancel
          </Button>
          <Button onClick={forgotPasswordToggle} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

ForgotPassword.propTypes = {
  onForgotPasswordToggle: PropTypes.func.isRequired,
  isForgotPassword: PropTypes.bool.isRequired,
};

export default ForgotPassword;
