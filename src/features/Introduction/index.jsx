import React from 'react';
import PropTypes from 'prop-types';
import './Introduction.scss';
import NavBar from '../../components/header';
import InputField from '../../components/InputField';

Introduction.propTypes = {};

function Introduction(props) {
  return (
    <div className="introduction">
      <div className="introduction-info">
        <h2>Unlimited movies, TV shows, and more.</h2>
        <h5>Watch anywhere. Cancel anytime.</h5>
        <span>Ready to watch? Enter your email to create or restart your membership.</span>
        <InputField />
      </div>
    </div>
  );
}

export default Introduction;
