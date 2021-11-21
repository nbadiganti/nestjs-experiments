import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { AuthService } from './services/auth/auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Movies, MoviesSchema } from './schema/movies.schema';
import { UsersModule } from './users.module';

@Module({
	imports: [ MongooseModule.forRoot('mongodb://localhost:27017'), UsersModule ],
	controllers: [ AppController ],
	providers: [ AppService ]
})
export class AppModule {}
