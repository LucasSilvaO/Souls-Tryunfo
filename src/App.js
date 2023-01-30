import React from 'react';
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
    isSaveButtonDisabled: true,
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.handleUndefinedCases);
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
    console.log(formularioPreenchido);

    if (formularioPreenchido && this.verificaParametros()) {
      console.log('entrou');
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
      isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
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
          onInputChange={ this.handleChange }
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
    );
  }
}
export default App;
