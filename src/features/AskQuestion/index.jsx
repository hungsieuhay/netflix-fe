import React from 'react';
import InputField from '../../components/InputField';
import CardList from './CardList';
import './AskQuestion.scss';

AskQuestion.propTypes = {};

function AskQuestion(props) {
  return (
    <div className="ask-question">
      <div className="ask-question__info">
        <h2>Frequently Asked Questions</h2>
        <CardList />
        <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
        <InputField />
      </div>
    </div>
  );
}

export default AskQuestion;
