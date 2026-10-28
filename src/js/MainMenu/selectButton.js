export function selectButtons(arrayOfButtons, activeButtonClassName) {
	let btnIndex = 0;

	function selectBottomButton() {
		const activeButton = document.querySelector(`.${activeButtonClassName}`);
		btnIndex = btnIndex >= arrayOfButtons.length - 1 ? 0 : ++btnIndex;

		activeButton?.classList.remove(`${activeButtonClassName}`);

		arrayOfButtons[btnIndex].classList.add(activeButtonClassName);
	}

	function selectUpperButton() {
		const activeButton = document.querySelector(`.${activeButtonClassName}`);
		btnIndex = btnIndex <= 0 ? arrayOfButtons.length - 1 : --btnIndex;

		activeButton?.classList.remove(`${activeButtonClassName}`);

		arrayOfButtons[btnIndex].classList.add(activeButtonClassName);
	}

	function enterButton() {
		const activeButton = document.querySelector(`.${activeButtonClassName}`);

		activeButton.click();
	}

	window.addEventListener("keydown", (e) => {
		if (e.code && e.code === "ArrowDown") {
			selectBottomButton();
		}

		if (e.code && e.code === "ArrowUp") {
			selectUpperButton();
		}

		if (e.code && e.code === "Enter") {
			enterButton();
		}
	});
}
