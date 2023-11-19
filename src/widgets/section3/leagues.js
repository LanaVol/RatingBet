import { topLeaguesData } from "../../data/data";

const leaguesBody = document.querySelector(".leagues__body");
const list = [];

for (const key in topLeaguesData) {
  const {
    iconPosition: { x, y },
    name,
  } = topLeaguesData[key];

  const item = `<li class="leagues__list-item leagues__list-item_default block_row">
                  <div class="leagues__icon" style="background-position: ${x}px ${y}px"></div>
                  <a href="#" class="cursor_pointer">${name}</a>
                </li>`;

  list.push(item);
}

const leaguesList = `<ul class="leagues__list">${list.join("")}</ul>`;
leaguesBody.insertAdjacentHTML("afterbegin", leaguesList);
