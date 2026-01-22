import { hamburgerButton, viewToggle } from "./ham-btn.mjs";
import { footerInfo } from "./footer-func.mjs";
import { FetchCurrentWeatherAPI, FetchDailyWeatherAPI } from "./weatherapi.mjs";
import { featuredMembers } from "./featured-mem.mjs";
import { loadTodaysEvent } from "./events.mjs";


const button = document.getElementById("ham-btn");
const navigation = document.getElementById("nav-toggle");
const businessInfo = document.getElementById("business-info");
const gridBtn = document.getElementById("grid-view");
const listBtn = document.getElementById("list-view");


hamburgerButton(button, navigation);
footerInfo();
FetchCurrentWeatherAPI("currentWeather");
FetchDailyWeatherAPI();
featuredMembers();
viewToggle(businessInfo, gridBtn, listBtn);
loadTodaysEvent();