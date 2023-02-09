import './App.css';

import cards from './Components/cards';
import Card from './Components/Card';



function App() {
  return (
    <div className="App">
      <div className="App-card">
      {
        cards.map((card) =>
        <Card name={card.name} price={card.price} priceTextHigh={card.priceTextHigh} priceTextLow={card.priceTextLow} speed={card.speed} condition={card.condition} color={card.color} backgroundColor={card.backgroundColor} isSelected={card.isSelected} />)
      }
      </div>
    </div>
  );
}

export default App;
