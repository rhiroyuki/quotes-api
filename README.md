# Quotes API [![Build Status](https://travis-ci.org/rhiroyuki/quotes-api.svg?branch=master)](https://travis-ci.org/rhiroyuki/quotes-api)
<img src="http://poraih.com.br/wp-content/uploads/2015/09/IMG_5711-940x627.jpg" width="480" alt="The Thinker">

*Inspirational and motivational quotes compressed in a simple API.*

_Quotes API_ is a NodeJS application built with ExpressJS and Mongoose.

### Tools used
[Heroku](https://www.heroku.com) - To easily deploy our application and make it available to the public.

[SwaggerUI](https://swagger.io/) - To document our API endpoints.

[ExpressJS](https://expressjs.com/) - To quickly build our web application.

[Mongoose](https://mongoosejs.com/) - To connect MongoDB, and also for it being a [ORM](https://en.wikipedia.org/wiki/Object-relational_mapping) it abstracts all the overhead implementation that we would be responsible if we used a database driver like [MongoDB NodeJS Driver](https://mongodb.github.io/node-mongodb-native/).

### API Documentation

If you want to know about the endpoints provided by our application,
you can check it by accessing our [Swagger documentation](https://ufscar-quotes-api.herokuapp.com/docs) (It may take up to 30 seconds for Heroku's dyno to wake up).

### Requirements

  - NodeJS 10.15
  - MongoDB 4.0

### Setup

There are two ways to setup the project:
You can run the script `setup.sh` that is under `scripts` folder:
  ```
  $ ./scripts/setup.sh
  ```

Or you can manually issue the commands below (assuming you are at the root directory of the project):
  ```
  $ cp .env.sample .env
  $ npm install
  $ ./scripts/seed.sh
  $ npm run dev
  ```
