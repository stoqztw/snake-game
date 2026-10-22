export function pasteTitleInMainMenu(titles, titleElementClassName) {
	const titleElement = document.querySelector(`.${titleElementClassName} pre`);
	const randomIndexOfTitle = Math.floor(Math.random() * titles.length);

	titleElement.innerHTML = titles[randomIndexOfTitle];
}
