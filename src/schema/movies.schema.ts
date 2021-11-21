import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MoviesDocument = Movies & Document;

@Schema()
export class Movies {
	@Prop() title: string;

	@Prop() genres: string[];

	@Prop() runtime: number;

	@Prop() rated: string;

	@Prop() year: number;

	@Prop() directors: string[];

	@Prop() cast: string[];

	@Prop() type: string;
}

export const MoviesSchema = SchemaFactory.createForClass(Movies);
