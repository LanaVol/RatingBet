/**
 * Represents data for top leagues.
 * @type {Object}
 */
import { topLeaguesData } from "../../data/data";

/**
 * Reference to the container for inserting the list of top leagues.
 * @type {HTMLElement}
 */
const leaguesBody = document.querySelector(".leagues__body");

/**
 * Array that will contain HTML strings for each top league item.
 * @type {Array}
 */
const list = [];

/**
 * Iterates over keys of the topLeaguesData object and constructs HTML strings for each top league item.
 */
for (const key in topLeaguesData) {
  const {
    iconPosition: { x, y },
    name,
  } = topLeaguesData[key];

  /**
   * HTML string for each top league item.
   * @type {string}
   */
  const item = `<li class="leagues__list-item leagues__list-item_default block_row">
                  <div class="leagues__icon" style="background-position: ${x}px ${y}px"></div>
                  <a href="#" class="cursor_pointer">${name}</a>
                </li>`;

  // Adding the HTML string to the array
  list.push(item);
}

/**
 * HTML string for the entire list of top leagues.
 * @type {string}
 */
const leaguesList = `<ul class="leagues__list">${list.join("")}</ul>`;

/**
 * Inserts the generated HTML string into the .leagues__body container.
 */
leaguesBody.insertAdjacentHTML("afterbegin", leaguesList);
