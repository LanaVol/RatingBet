/**
 * Imports forecast data from an external module.
 * @type {Object} forecastsData - The data containing forecasts.
 */
import { forecastsData } from "../../data/data";

/**
 * Reference to the container for inserting forecast cards.
 * @type {HTMLElement}
 */
const forecastsCards = document.querySelector(".forecasts__cards");

/**
 * Array that will contain HTML strings for each forecast card.
 * @type {Array}
 */
const list = [];

/**
 * Iterates over keys of the forecastsData object and constructs HTML strings for each forecast card.
 */
for (const key in forecastsData) {
  // Destructuring data for convenience
  const {
    category,
    date,
    time,
    team1,
    iconTeam1: { x: x1, y: y1 },
    team2,
    iconTeam2: { x: x2, y: y2 },
    dateForecast,
    popular,
  } = forecastsData[key];

  /**
   * HTML string for each forecast card.
   * @type {string}
   */
  const card = `<li class="card body_rounded_white block_center">
                  <div class="card__banner">
                    ${popular ? '<span class="card__label card__label_orange">Популярный</span>' : ""}
                    <figure class="card__image" style="background-position: ${x1}% ${y1}%"></figure>
                    <figure class="card__image" style="background-position: ${x2}% ${y2}%"></figure>
                  </div>
                  <div class="card__info card__info_inner">
                    <p class="card__info-item card__info-item_grey"><span class="card__info-item_bold_blue">${category}</span> / ${date} в ${time}</p>
                    <h3 class="card__info-title">${team1} - ${team2}. Прогноз на матч ${dateForecast}</h3>
                  </div>
                </li>`;

  // Adding the HTML string to the array
  list.push(card);
}

/**
 * Inserts all generated HTML strings into the .forecasts__cards container.
 */
forecastsCards.insertAdjacentHTML("afterbegin", list.join(""));
