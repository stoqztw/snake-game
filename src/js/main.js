"use strict";

import { pasteTitleInMainMenu } from "./pasteTitle";
import { titles } from "./titlesList";

window.addEventListener("DOMContentLoaded", () => {
	pasteTitleInMainMenu(titles, "main-menu__title");
});
