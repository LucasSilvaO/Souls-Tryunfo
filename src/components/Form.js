import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      //   hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <>
        <label htmlFor="name">
          Nome
          <input
            id="name"
            type="text"
            data-testid="name-input"
            value={ cardName }
            onClick={ onInputChange }
          />
        </label>
        <label htmlFor="text">
          Descrição
          <textarea
            id="text"
            data-testid="description-input"
            value={ cardDescription }
            onClick={ onInputChange }
          />
        </label>
        <label htmlFor="atr1">
          Atributo 1
          <input
            id="atr1"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onClick={ onInputChange }
          />
        </label>
        <label htmlFor="atr2">
          Atributo 2
          <input
            id="atr2"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onClick={ onInputChange }
          />
        </label>
        <label htmlFor="atr3">
          Atributo 3
          <input
            id="atr3"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onClick={ onInputChange }
          />
        </label>
        <label htmlFor="img">
          Imagem
          <input
            id="img"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onClick={ onInputChange }
          />
        </label>
        <label htmlFor="select">
          Raridade:
          <select
            id="select"
            data-testid="rare-input"
            value={ cardRare }
            onClick={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="check">
          Super Trybe Tryunfo
          <input
            id="check"
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onClick={ onInputChange }
          />
        </label>
        <button
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  //   hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
