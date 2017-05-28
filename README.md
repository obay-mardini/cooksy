# Cooksy

## Getting started
To get started with development, clone the repo and run the following commands:
- `cd cooksy`
- `npm install`

### Configuring Environment Variables
Create a `.env` file in the root directory and follow the example `.env.example`.

### Setting up database
Install PostgreSQL, and create a new user and database. Then run the command
```
$ sequelize db:migrate --url postgres://username:password@localhost:5432/dbname
```
where `username`, `password`, and `dbname` are the user information and database name that was created earlier. If `sequelize-cli` is not installed globally, then replace `sequelize` with `node_modules/.bin/sequelize`.

Finally, we can run
- `npm start`

The `npm start` command will start up two servers. It will start up the backend server which is found at `http://localhost:3001`. The second server is for the frontend which is found at `http://localhost:3000`.

To develop on the frontend, navigate to the `client` directory in a separate terminal (`cd client`), and run the commands:
- `npm install`
- `npm test`

The tests will be run in an interactive/watch mode.

### Tests on the server side

The provided tests utilize the Mocha, Chai, supertest and Sinon testing libraries, and may be run with the `npm run test:server` command from within the `cooksy` directory. This command will also generate and display a coverage report, provided by the Istanbul/nyc utility.

If you would prefer to generate an HTML coverage view, you may run the `npm run test:html` command. After the script has executed, navigate to the `cooksy/coverage` directory and open the `index.html` file in your browser.

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

### Roadmap

View the project roadmap [here](https://github.com/Cook-sy/cooksy/issues)
