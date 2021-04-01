### Summary

This is a simple app with node express mongodb mongoose.
App is listening on port 3000.

#### Requirements

Docker
docker-compose

#### Simple Launch

docker-compoes up

##### Dev Setup

Install package in src:

- cd src && npm install

Uncomment the following lines in docker-compose:

"# volumes:"
"# - ./src/:/usr/src/app"

Go to root directory:

- cd .. && docker-compose up

#### Test

Workdir: src

- cd src && npm run test

#### Debug

With vscode

- Use the launch.json
