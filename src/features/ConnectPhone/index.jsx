import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './ConnectPhone.scss';

ConnectPhone.propTypes = {};

function ConnectPhone(props) {
  return (
    <div className="connect-phone">
      <Container>
        <Row>
          <Col xs="6" className="col-left">
            <h2>Have an Android Phone? Get our new free plan!</h2>
            <h3>
              Watch a selection of new movies and TV shows without adding any payment details!
            </h3>
            <a href="https://play.google.com/store/apps/details?id=com.netflix.mediaclient">
              Get the app
            </a>
          </Col>
          <Col xs="6" className="col-right">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ab36101/nmhp/vn.jpg"
              alt="phone-img"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ConnectPhone;
