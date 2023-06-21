import React from 'react'
import { useState } from 'react';
import "./Testingitem.css"
import { Hometable } from "./Hometable";
import { Cardsection } from "./Cardsection";



export const Testingitem = () => {
    const tickerList = document.querySelector('.ticker-list');
const tickerItems = Array.from(tickerList.children);
const tickerContainerWidth = document.querySelector('.ticker-container').offsetWidth;

let tickerPosition = tickerContainerWidth;

function moveTicker() {
  tickerPosition -= 1;
  tickerList.style.transform = `translateX(${tickerPosition}px)`;

  if (tickerPosition <= -tickerList.offsetWidth) {
    tickerPosition = tickerContainerWidth;
  }

  requestAnimationFrame(moveTicker);
}

moveTicker();

    
  return (
    <div class="ticker-container">
  <ul class="ticker-list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
  </ul>
</div>

  
);
}
