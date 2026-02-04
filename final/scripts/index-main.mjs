import { footer } from "./footer.mjs";
import { hamburgerButton } from "./hamurger.mjs";
import { basicMovements, openingPrinciples, tacticsAndStrategy, endgameFundamentals } from "./chess-lessons.mjs";
import { puzzleOfDay } from "./puzzle-of-day.mjs";


footer("year", "lastModified");
hamburgerButton("toggle-button", "nav-toggle");
basicMovements();
openingPrinciples();
tacticsAndStrategy();
endgameFundamentals();
puzzleOfDay();
