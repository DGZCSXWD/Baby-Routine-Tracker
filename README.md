# Baby-Routine-Tracker

Baby Tracker is a web application built using Express.js with a Handlebars.js view engine and a Sequelize ORM for the MySQL database.

## Description

This application allows parents to easily record and monitor the feeding and nappy changes of their baby.

## Features

- User Registration and Login
- Record a feeding: record the type of milk (breast/formula) and quantity
- Record a nappy change: record the type (pee/poo/dry) and time
- Display all the recorded data on the page after the user logs in

## Installation

1. Clone the repository
2. Navigate to the project folder in your terminal
3. Run `npm install` to install the required dependencies
4. Set up your database and update the database configuration in `config/connection.js`
5. Start the server by running `npm start`

## Usage

1. Register a new user
2. Log in with your credentials
3. On the landing page, click the buttons to record a new feeding or nappy change
4. The latest records will be displayed on the landing page
