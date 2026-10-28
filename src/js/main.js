"use strict";

import { hideSubtitleAndRenderMainMenu } from "./MainMenu/renderMainMenu";
import { selectButtons } from "./MainMenu/selectButton";
import { pasteTitleInMainMenu } from "./pasteTitle";
import { renderGamePage } from "./renderGamePage";
import { titles } from "./titlesList";

window.addEventListener("DOMContentLoaded", () => {
	const mainMenuContainer = document.querySelector(".main-menu__container");
	const listButtonsInMainMenu =
		mainMenuContainer.querySelectorAll(".main-menu__btn");
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

	selectButtons(listButtonsInMainMenu, "main-menu__btn_active");

	pasteTitleInMainMenu(titles, "main-menu__title");

	mainMenuContainer.addEventListener("click", (e) => {
		const target = e.target;

		if (target && target.matches("[data-start]")) {
			renderGamePage();
		}

		if (target && target.matches("[data-settings]")) {
			console.log(1);
		}
	});
});
