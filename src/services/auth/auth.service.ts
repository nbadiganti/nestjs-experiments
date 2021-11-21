import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMovieDto } from 'src/createmoviedto';
import { Movies, MoviesDocument } from 'src/schema/movies.schema';

@Injectable()
export class AuthService {
	constructor(@InjectModel(Movies.name) private readonly model: Model<MoviesDocument>) {}

	async findAll(): Promise<Movies[]> {
		console.log('called');
		return await this.model.find({}).exec();
	}

	async create(createMovieDto: CreateMovieDto): Promise<Movies> {
		return await new this.model({
			...createMovieDto,
			createdAt: new Date()
		}).save();
	}

	async delete(id: string): Promise<any> {
		return await this.model.findByIdAndDelete(id).exec();
	}
}
