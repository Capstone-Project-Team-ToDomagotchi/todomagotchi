# ToDoMagotchi

## Credits
Developed by: 
```
Carla Herrera, Elizabeth "Betsy" Carter, Jing Mo, Sarah Stephens, Zelda Ogiamien
```
Artwork by:
``` 
Elizabeth "Betsy" Carter
```

## Setup

- Use `npm install` to add required modules.
- Create two postgres databases (`MY_APP_NAME` should match the `name`
  parameter in `package.json`):
  - These commands will create both your **development** and **test** databases
- By default, running `npm test` will use your test database, while
  regular development uses development database

## Start

Sync and seed your database by running `npm run seed`. Running `npm run start:dev` will make great things happen!

- start:dev will both start your server and build your client side files using webpack
- start:dev:logger is the same as start:dev, but you will see your SQL queries (can be helpful for debugging)
- start:dev:seed will start your server and also seed your database (this is useful when you are making schema changes and you don't want to run your seed script separately)
