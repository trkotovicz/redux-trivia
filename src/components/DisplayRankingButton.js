import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DisplayRankingButton extends Component {
  handleClick = () => {
    const { history } = this.props;
    history.push('/game/ranking');
  };

  render() {
    return (
      <button
        type="button"
        data-testid="btn-ranking"
        onClick={ this.handleClick }
      >
        Ranking
      </button>
    );
  }
}

DisplayRankingButton.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default DisplayRankingButton;
