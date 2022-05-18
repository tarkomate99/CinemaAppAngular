export class Movie {
	public date: string;
	public imageUrl: string;
	public title: string;

	constructor(date: string, imageUrl: string, title: string){
		this.date = date;
		this.imageUrl = imageUrl;
		this.title = title;
	}
}