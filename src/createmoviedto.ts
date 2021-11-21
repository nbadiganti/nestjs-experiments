export class CreateMovieDto {
	title: string;
	runtime: number;
	rated: string;
	year: string;
	genres?: string[];
	directors?: string[];
	cast?: string[];
	type?: string;
}
