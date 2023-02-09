import React from "react";

import "./Card.css";

class Card extends React.Component {
  render() {
    const {
      name,
      price,
      priceTextHigh,
      priceTextLow,
      speed,
      condition,
      color,
      backgroundColor,
      isSelected,
    } = this.props;

    let classCard;
    if (isSelected) classCard = "selected";

    return (

      <div className={`card ${classCard}`}>
        <div className="card-name" style={{ backgroundColor: color }}>
          {name}
        </div>
        <div className="card-price" style={{ backgroundColor: backgroundColor }}>
          <span className="priceTextHigh">{priceTextHigh}</span>
          <span className="price">{price}</span>
          <span className="priceTextLow">{priceTextLow}</span>
        </div>

        <div className="card-speed">{speed}</div>
        <div className="card-condition">{condition}</div>
      </div>
    );
  }
}

export default Card;
