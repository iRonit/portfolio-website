import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards({ id, title, cardsPerRow }) {
  return (
    <div className='cards' id={id}>
      <h1>{title}</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {
            cardsPerRow.map(cardsInRow => {
              return (
                <ul className='cards__items'>
                  {
                    cardsInRow.cards.map(card => {
                      return (
                        <CardItem
                          src={card.image}
                          text={card.text}
                          label={card.label}
                          path={card.path}
                        />
                      );
                    })
                  }
                </ul>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Cards;
