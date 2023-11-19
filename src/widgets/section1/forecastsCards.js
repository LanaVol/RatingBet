import { forecastsData } from "../../data/data";

const forecastsCards = document.querySelector(".forecasts__cards");
const list = [];

for (const key in forecastsData) {
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

  list.push(card);
}
forecastsCards.insertAdjacentHTML("afterbegin", list.join(""));
