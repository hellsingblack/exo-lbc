import React from "react";
import { reduxForm, Field } from 'redux-form';

const form = 'messageForm';

const validate = (values) => {
  let errors = {};

  return errors;
}

const Message = ({
  save,
  handleSubmit,
  pristine,
  submitting,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit(save)}>
        <div classNames="form-group">
          <label for="exampleInputEmail1">New message</label>
          <Field className="form-control" name="message" component="input" type="text" placeholder="Write a message" />
        </div>
        <div class="checkbox">
          <label>
            <Field
              name="isPrivate"
              component="input"
              type="checkbox"
            />
            Is private message ?
          </label>
        </div>
        <button type="submit" disabled={pristine || submitting} className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

Message.propTypes = {
  handleSubmit: React.PropTypes.func,
  save: React.PropTypes.func,
}

const MessageForm = reduxForm({
  form,
  validate,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
})(Message);

export default MessageForm;

