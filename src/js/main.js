"use strict";

import { pasteTitleInMainMenu } from "./pasteTitle";
import { renderGamePage } from "./renderGamePage";
import { titles } from "./titlesList";

window.addEventListener("DOMContentLoaded", () => {
	const mainMenuContainer = document.querySelector(".main-menu__container");

	pasteTitleInMainMenu(titles, "main-menu__title");

	mainMenuContainer.addEventListener("click", (e) => {
		const target = e.target;

		if (target && target.matches("[data-start]")) {
			renderGamePage();
		}
	});
});
