export class Snake {
	constructor(startSize) {
		this.startSize = Number.isInteger(startSize) ? startSize : 2;
	}
}
