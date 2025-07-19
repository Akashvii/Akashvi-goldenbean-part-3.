import React from 'react';
import './menu.css';
import Americano from '../assets/images/Americano.jpg';
import Latte from '../assets/images/Latte.jpg';
import Cappuccino from '../assets/images/Cappuccino.jpg';

export default function Menu() {
  return (
    <div className="drink-container">
      <div className="drink">
        <img src={Americano} alt="Americano" className="drink-image" />
        <div className="drink-description">
          <h2>Americano</h2>
          <p>
            A rich and bold coffee brewed by forcing hot water through finely-ground coffee beans.
          </p>
        </div>
      </div>

      <div className="drink">
        <img src={Latte} alt="Latte" className="drink-image" />
        <div className="drink-description">
          <h2>Latte</h2>
          <p>
            A creamy and smooth coffee drink made with espresso and steamed milk, topped with a light layer of foam.
          </p>
        </div>
      </div>

      <div className="drink">
        <img src={Cappuccino} alt="Cappuccino" className="drink-image" />
        <div className="drink-description">
          <h2>Cappuccino</h2>
          <p>
            A classic coffee drink made with equal parts espresso, steamed milk, and milk foam.
          </p>
        </div>
      </div>
    </div>
  );
}