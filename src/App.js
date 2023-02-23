import React from 'react';
import dsCharacters from './characters';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: '',
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cards: [],
    filteredCards: [],
    hasFilteredCards: false,
  };

  componentDidMount() {
    this.setState({
      cards: [...dsCharacters],
    });
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const { cards } = this.state;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    if (name === 'filtro') {
      const filtered = cards.filter((element) => element.name.includes(target.value));
      if (filtered.length > 0) {
        this.setState({
          hasFilteredCards: true,
        });
      } else {
        this.setState({
          hasFilteredCards: false,
        });
      }
      this.setState({
        filteredCards: [...filtered],
      });
    } else {
      this.setState({
        [name]: value,
      }, this.handleUndefinedCases);
    }
  };

  handleUndefinedCases = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage } = this.state;

    const undefinedCases = [
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    ];
    const formularioPreenchido = undefinedCases.every((caso) => caso.length > 0);

    if (formularioPreenchido && this.verificaParametros()) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  verificaParametros = () => {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;

    const atr1 = parseInt(cardAttr1, 10);
    const atr2 = parseInt(cardAttr2, 10);
    const atr3 = parseInt(cardAttr3, 10);
    const Ttl = atr1 + atr2 + atr3;

    const atributos = [
      atr1,
      atr2,
      atr3];
    const maxAtr = 90;
    const maxTotal = 210;
    const validateAtr = atributos.every((atributo) => atributo <= maxAtr);

    if (validateAtr && Ttl <= maxTotal && atr1 >= 0 && atr2 >= 0 && atr3 >= 0) {
      return true;
    }
  };

  onSaveButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.state;
    const card = {
      name: cardName,
      description: cardDescription,
      attr1: cardAttr1,
      attr2: cardAttr2,
      attr3: cardAttr3,
      img: cardImage,
      rarity: cardRare,
      trunfo: cardTrunfo };
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
    this.arrayOfCards(card);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: '',
    });
  };

  arrayOfCards = (card) => {
    const { cards } = this.state;
    this.setState({
      cards: [...cards, card],
    });
  };

  excludeCard = (id) => {
    const { cards, hasTrunfo } = this.state;
    const index = cards.findIndex((element) => element.name === id);
    const listCard = [...cards];
    listCard.splice(index, 1);
    this.setState({
      cards: [...listCard],
    });
    if (hasTrunfo) {
      this.setState({
        hasTrunfo: false,
      });
    }
  };

  filterName = (target) => {
    this.handleChange(target);
  };

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
      hasTrunfo,
      isSaveButtonDisabled,
      cards,
      filteredCards,
      hasFilteredCards } = this.state;
    return (
      <div>
        <h1>Souls-Tryunfo</h1>
        <div className="form-and-card">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            hasTrunfo={ hasTrunfo }
            onInputChange={ this.handleChange }
            onSaveButtonClick={ this.onSaveButton }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <h2>Cartas prontas:</h2>
        <input
          name="filtro"
          type="text"
          data-testid="name-filter"
          onChange={ this.filterName }
        />
        <div className="ready-cards">
          { !hasFilteredCards ? (cards.map((card, index) => (
            <div key={ card.name }>
              <Card
                key={ index }
                cardName={ card.name }
                cardDescription={ card.description }
                cardAttr1={ card.attr1 }
                cardAttr2={ card.attr2 }
                cardAttr3={ card.attr3 }
                cardImage={ card.img }
                cardRare={ card.rarity }
                cardTrunfo={ card.trunfo }
              />
              <button
                name="btnExclude"
                onClick={ () => this.excludeCard(card.name) }
                data-testid="delete-button"
              >
                Excluir
              </button>
            </div>))) : (<span />)}
        </div>

        { hasFilteredCards ? (filteredCards.map((card, index) => (
          <>
            <Card
              key={ index }
              cardName={ card.name }
              cardDescription={ card.description }
              cardAttr1={ card.attr1 }
              cardAttr2={ card.attr2 }
              cardAttr3={ card.attr3 }
              cardImage={ card.img }
              cardRare={ card.rarity }
              cardTrunfo={ card.trunfo }
            />
            <button
              name="btnExclude"
              onClick={ () => this.excludeCard(card.name) }
              data-testid="delete-button"
            >
              Excluir
            </button>
          </>))) : <span />}
      </div>
    );
  }
}
export default App;
