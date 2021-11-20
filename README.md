## Description

Experiments with NextJS API framework

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## API GET request example 
```bash
@Get()
findAll(@Req() request: Request, @Res() response): string {
    console.log(request);
    return response.status(200).send('Total users list');
}
```

## API Post request example 

```bash
@Post('/create')
@HttpCode(200)
createUser(@Req() request, @Res() response) {
    console.log(request);
    if(request && request._body && request.body.name) {
        return response.send(`Successfully created ${request.body.name}!`);
    }
    else return "User created successfully!"
}
```

## Stay in touch

- Author - [Nagendra Badiganti](https://www.linkedin.com/in/nagendra-badiganti/)

## License

This project is [MIT licensed](LICENSE).
