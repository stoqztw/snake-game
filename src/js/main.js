"use strict";

import { pasteTitleInMainMenu } from "./pasteTitle";
import { titles } from "./titlesList";

window.addEventListener("DOMContentLoaded", () => {
	// const intervalId = setInterval(() => {
	// 	pasteTitleInMainMenu(titles, "main-menu__title");
	// }, 3000);
	const mainMenuContainer = document.querySelector(".main-menu__container");

	pasteTitleInMainMenu(titles, "main-menu__title");

	mainMenuContainer.addEventListener("click", (e) => {
		const target = e.target;

		if (target && target.matches("[data-start]")) {
			console.log(1);
		}
	});
});
