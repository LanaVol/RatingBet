import "./styles/styles.scss";
import "./styles/global.scss";

// class Forecast {
//   constructor(
//     category,
//     date,
//     time,
//     team1,
//     labelTeam1,
//     team2,
//     labelTeam2,
//     dateForecast,
//     popular
//   ) {
//     this.category = category;
//     this.date = date;
//     this.time = time;
//     this.team1 = team1;
//     this.labelTeam1 = labelTeam1;
//     this.team2 = team2;
//     this.labelTeam2 = labelTeam2;
//     this.dateForecast = dateForecast;
//     this.popular = popular;
//   }
// }

const body = document.querySelector("body");
const menu = document.querySelector(".menu");
const bg = document.querySelector(".bground");
body.addEventListener("click", handleClick);

function handleClick(e) {
  if (e.target.classList.contains("header__burger")) {
    bg.classList.add("bg_active");
    menu.classList.add("header__menu_mobile-active");
  }

  if (e.target.classList.contains("close-btn") && menu.classList.contains("header__menu_mobile-active")) {
    bg.classList.remove("bg_active");
    menu.classList.remove("header__menu_mobile-active");
  }
}
