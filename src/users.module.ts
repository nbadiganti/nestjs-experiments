import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Movies, MoviesSchema } from './schema/movies.schema';
import { AuthService } from './services/auth/auth.service';
import { UsersController } from './users/users.controller';

@Module({
	providers: [ AuthService ],
	controllers: [ UsersController ],
	imports: [ MongooseModule.forFeature([ { name: Movies.name, schema: MoviesSchema } ]) ]
})
export class UsersModule {}
