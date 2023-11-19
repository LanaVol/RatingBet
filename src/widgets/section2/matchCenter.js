import { matchCenter } from "../../data/data";

const matchList = document.querySelector(".match__list");
const list = [];

for (const key in matchCenter) {
  const {
    date,
    team1,
    iconTeam1: { x: x1, y: y1 },
    score1,
    addScore1,
    team2,
    iconTeam2: { x: x2, y: y2 },
    score2,
    addScore2,
    isLive,
    showForecastBtn,
  } = matchCenter[key];

  const setScoreColor = `${isLive ? "match__item-el_orange" : !score1 ? "match__item-el_lightGrey" : ""}`;

  const item = `<li class="match__item match__item_inner body_rounded_white cursor_pointer">
                  <div class="match__item-el match__item-el_grey ${isLive ? "match__item-el_orange" : ""}">
                  ${isLive ? `<span class="match__text-bold">Live</span> , ${date}` : date}
                  </div>

                  <div class="match__item-el match__item-el_s match__item-el_l match__item-el_black">
                    <div class="match__item-name match__item-icon-reverse block_row">
                      <figure class="match__icon" style="background-position: ${x1}% ${y1}%"></figure>
                      <p>${team1}</p>
                    </div>
                    <div>
                      <p class="match__item-number ${setScoreColor}">
                        ${score1 ? score1 : "-"}
                      </p>
                      ${addScore1 ? `<span>${addScore1}</span>` : ""}
                    </div>
                  </div>

                  <div>
                  <div class="match__item-el match__item-el_hide match__item-points ${setScoreColor}">:</div>
                  ${addScore1 && addScore2 ? "<span> : </span>" : ""}</div>

                  <div class="match__item-el match__item-el_s match__item-el_l-reverse match__item-el_black">
                    <div class="match__item-name block_row">
                      <figure class="match__icon" style="background-position: ${x2}% ${y2}%"></figure>
                      <p>${team2}</p>
                    </div>
                    <div>
                      <p class="match__item-number ${setScoreColor}">
                        ${score2 ? score2 : "-"}
                      </p>
                      ${addScore2 ? `<span>${addScore2}</span>` : ""}
                    </div>
                  </div>

                  <div class="match__item-el match__item-el_end">
                    ${showForecastBtn ? '<button class="button button_text match-btn block_row cursor_pointer">Прогноз</button>' : ""}
                  </div>
                </li>`;

  list.push(item);
}

matchList.insertAdjacentHTML("afterbegin", list.join(""));
