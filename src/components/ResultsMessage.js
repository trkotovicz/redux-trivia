import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import lose from '../assets/imgs/lose.png';
import won from '../assets/imgs/won.png';
import './ResultsMessage.css';

class ResultsMessage extends Component {
  render() {
    const { assertions } = this.props;
    const minRightAnswers = 3;

    return (
      <section className="ResultsMessage" data-testid="feedback-text">
        <div className="ResultsMessage-picture-container">
          {assertions >= minRightAnswers ? (
            <img src={ won } alt="You won" />
          ) : (
            <img src={ lose } alt="" />
          )}
        </div>
        <p>{assertions >= minRightAnswers ? 'Well Done!' : 'Coulde been better...'}</p>
      </section>
    );
  }
}

const mapStateToProps = ({ player: { assertions } }) => ({
  assertions,
});

ResultsMessage.propTypes = {
  assertions: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(ResultsMessage);
