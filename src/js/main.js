"use strict";

import { pasteTitleInMainMenu } from "./pasteTitle";
import { renderGamePage } from "./renderGamePage";
import { titles } from "./titlesList";
import { hideSubtitleAndRenderMainMenu } from "./Utils/renderMainMenu";

window.addEventListener("DOMContentLoaded", () => {
	const mainMenuContainer = document.querySelector(".main-menu__container");
	const subtitle = document.querySelector(".main-menu__subtitle");

	window.addEventListener(
		"click",
		(e) => {
			hideSubtitleAndRenderMainMenu(subtitle, mainMenuContainer);
		},
		{ once: true },
	);

	window.addEventListener(
		"keydown",
		(e) => {
			hideSubtitleAndRenderMainMenu(subtitle, mainMenuContainer);
		},
		{ once: true },
	);

	pasteTitleInMainMenu(titles, "main-menu__title");

	mainMenuContainer.addEventListener("click", (e) => {
		const target = e.target;

		if (target && target.matches("[data-start]")) {
			renderGamePage();
		}
	});
});
