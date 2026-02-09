import { signUp } from "./community-form.mjs";
import { loadLeaderboards } from "./leaderboards.mjs";
import { footer } from "./footer.mjs";
import { hamburgerButton } from "./hamurger.mjs";

hamburgerButton("toggle-button", "nav-toggle");
footer("year", "lastModified");
signUp();
loadLeaderboards();