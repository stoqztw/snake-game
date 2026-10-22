"use strict";

import { titles } from "./titlesList";
import { pasteTitleInMainMenu } from "./pasteTitle";

window.addEventListener("DOMContentLoaded", () => {
	pasteTitleInMainMenu(titles, "main-menu__title");
});
