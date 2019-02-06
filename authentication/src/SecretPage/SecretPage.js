import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { validate, warn, renderField} from './helpers'

let ContactForm = props => {
  const { handleSubmit, pristine, reset, submitting  } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="fullname" component={renderField} type="text" label="Full name" className="form-control"/>
      <Field name="email" component={renderField} type="email" label="Email" className="form-control"/>
      <Field name="age" component={renderField} type="number" label="Age" className="form-control"/>
      <div className="form-group">
        <button className="btn btn-primary" disabled={submitting}>Submit</button>
        <button className="btn btn-outline-primary ml-3" type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
    )
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact',
  validate, // <--- validation function given to redux-form
  warn // <--- warning function given to redux-form
})(ContactForm)


class SecretPage extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    console.log('Loging out ...');
    this.props.onLogout();
  }
  
  submit = values => {
    // print the form values to the console
    console.log('Thank you for your submission. We promise to keep all the information that you share with us confidential. ', values)
    alert('Thank you. Please check the console for details.')
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Welcome</h2>
          <p>Welcome <code>{this.props.user.username}</code>.</p> 
          <p>You have unlocked a secret page. It's now time to introduce yourself:</p>
          <ContactForm onSubmit={this.submit} />
          <div className="form-group mt-5">
            <p>Do not forget to  
            <button 
              type="button"
              onClick={this.handleLogout}
              className="btn btn-link pt-0 pb-1">log out</button> 
              and keep this page secret.
              </p>
          </div>
        </div>
      </div>
    );
  }
}

export { SecretPage }; 