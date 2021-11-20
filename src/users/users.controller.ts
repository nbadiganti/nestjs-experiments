import { Controller, Get, HttpCode, Param, Post, Query, Redirect, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { request } from 'http';

@Controller('users')
export class UsersController {
    @Get()
    findAll(@Req() request: Request, @Res() response): string {
        console.log(request);
        return response.status(200).send('Total users list');
    }

    @Post('/create')
    @HttpCode(200)
    createUser(@Req() request, @Res() response) {
        console.log(request);
        if(request && request._body && request.body.name) {
            return response.send(`Successfully created ${request.body.name}!`);
        }
        else return "User created successfully!"
    }
    
    @Get('help')
    @Redirect('https://nestjs.com', 301) 
    help() {
    }

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

}
