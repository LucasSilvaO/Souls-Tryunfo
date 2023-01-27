import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div>
        <p data-testid="name-card">
          { cardName }
        </p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">
          { cardDescription }
        </p>
        <ol>
          <li data-testid="attr1-card">
            {cardAttr1}
          </li>
          <li data-testid="attr2-card">
            {cardAttr2}
          </li>
          <li data-testid="attr3-card">
            {cardAttr3}
          </li>
        </ol>
        <span data-testid="rare-card">
          { cardRare }
        </span>
        {
          cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>
        }
      </div>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.string.isRequired,
};
export default Card;
