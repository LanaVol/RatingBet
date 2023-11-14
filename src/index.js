import "./styles/global.scss";
import "./styles/styles.scss";

class Forecast {
  constructor(
    category,
    date,
    time,
    team1,
    labelTeam1,
    team2,
    labelTeam2,
    dateForecast,
    popular
  ) {
    this.category = category;
    this.date = date;
    this.time = time;
    this.team1 = team1;
    this.labelTeam1 = labelTeam1;
    this.team2 = team2;
    this.labelTeam2 = labelTeam2;
    this.dateForecast = dateForecast;
    this.popular = popular;
  }
}
