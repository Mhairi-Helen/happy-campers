# "The" Camping App 🏕️

Front end application for DevelopMe_ wk, 12 task.

We were tasked with creating a full stack application from requirements gathering through to development, testing and later deployment.

## Installation

```
npm i && npm start
```

### Run local API

App is still in development but you can access the API locally from your machine by cloning this repo [here](https://github.com/harrietgoddard/camping-api).

Clone the API repo, and run the following commands.

```
git clone git@github.com:harrietgoddard/camping-api.git
composer install
vendor/bin/homestead make
cp .env.example .env

// inside .env change the db name, user and password in .env to homestead, root, secret
// in homestead.yaml change memory to 512

vagrant up
vagrant ssh
cd code
run artisan key:generate
run artisan migrate

Then depending on your OS, you need to change the `.env` file in the **react front end app** using the instructions below.
```

### Mac OS

You need to point the React app towards the appropriate URL. You can edit this in the `.env` file in the root directory.

```
REACT_APP_API_URL=http://<laravel url here>/api/
```

### Win OS

You need to point the React app towards the appropriate URL. You can edit this in the `.env` file in the root directory.

```
REACT_APP_API_URL=http://localhost:8000/api/
```

## Teams

Front end: Mhairi and Dan
Back end: Harriet and Avi

## Technology Stack

- React
- Redux
- PHP
- Laravel
- SCSS / CSS
- AWS
- Capistrano
