# Docker Compose for Node.js and PostgreSQL

For the sake of making it more real-world, setup has also a build step (here with **TypeScript**).

## [Read more](https://michalzalecki.com/docker-compose-for-nodejs-and-postresql/)

I've put together an article which explains most of the code from this repo: [Docker Compose for NodeJS and PostreSQL](https://michalzalecki.com/docker-compose-for-nodejs-and-postresql/)

## Run

    docker-compose up

## WARNING

Don't keep `.env` file in the repo. It's here as it makes demo example simpler.

Note

When updating the package.json you need to build the dependency `npm run-script build`

$ ./node_modules/.bin/tsc --target es6 --moduleResolution node  t.ts

