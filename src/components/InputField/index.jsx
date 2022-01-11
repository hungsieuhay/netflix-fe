import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import './InputField.scss';
InputField.propTypes = {};

function InputField(props) {
  return (
    <div className="input-field">
      <Form inline>
        <FormGroup>
          <Input
            id="email"
            name="email"
            placeholder="Email address"
            type="email"
            className="input-field__input"
          />
        </FormGroup>{' '}
      </Form>
      <Button>Get Started</Button>
    </div>
  );
}

export default InputField;
