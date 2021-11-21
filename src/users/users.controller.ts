import { Body, Controller, Delete, Get, HttpCode, Param, Post, Query, Redirect, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { request } from 'http';
import { CreateMovieDto } from 'src/createmoviedto';
import { AuthService } from 'src/services/auth/auth.service';

@Controller('users')
export class UsersController {
	constructor(private readonly service: AuthService) {}

	@Get()
	findAll(@Req() request: Request, @Res() response): string {
		console.log(request);
		return response.status(200).send('Total users list');
	}

	@Post('/create')
	@HttpCode(200)
	createUser(@Req() request, @Res() response) {
		console.log(request);
		if (request && request._body && request.body.name) {
			return response.send(`Successfully created ${request.body.name}!`);
		} else return 'User created successfully!';
	}

	@Get('help')
	@Redirect('https://nestjs.com', 301)
	help() {}

	@Get('docs')
	@Redirect('https://docs.nestjs.com', 302)
	getDocumentByVersion(@Query('version') version) {
		if (version && version === '5') {
			return { url: 'https://docs.nestjs.com/v5/' };
		}
	}

	@Get('/help/:id')
	getDocumentByID(@Param('id') id: string): string {
		return `This action returns a #${id} document`;
	}

	@Get('/movies')
	async index() {
		return await this.service.findAll();
	}

	@Post('/movies/create')
	async create(@Body() createMovieDto: CreateMovieDto) {
		return await this.service.create(createMovieDto);
	}

	@Delete('/movies/delete/:id')
	async delete(@Param('id') id: string) {
		return await this.service.delete(id);
	}
}
