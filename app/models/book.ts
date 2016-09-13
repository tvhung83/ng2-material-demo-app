export class Book {
	id: number;
	title: string;
	author: string;
	description: string;

	constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
