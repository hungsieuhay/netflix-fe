import React from 'react';
import NavBar from '../../components/header';
import AskQuestion from '../../features/AskQuestion';
import ConnectPhone from '../../features/ConnectPhone';
import Introduction from '../../features/Introduction';
import './HomePage.scss';

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <div className="main">
      <div className="home-page ">
        <NavBar />
        <Introduction />
      </div>
      <div className="main__conect--phone">
        <ConnectPhone />
      </div>
      <div className="main__ask-question">
        <AskQuestion />
      </div>
    </div>
  );
}

export default HomePage;
