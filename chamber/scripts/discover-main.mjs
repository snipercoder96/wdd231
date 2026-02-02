import { footerInfo } from "./footer-func.mjs";
import { interestPlace } from "./interest.mjs";
import { hamburgerButton } from "./ham-btn.mjs";
import { lastOpened } from "./last-opened.mjs";



footerInfo();
interestPlace();
hamburgerButton(document.getElementById("ham-btn"), document.getElementById("nav-toggle"));
lastOpened();