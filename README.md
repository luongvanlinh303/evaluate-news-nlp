# Udacity Project:

# Evaluate a news article with Natural Language Processing

## Project Objective

To build a News Article/ Blog Sentiment Analysis website using Natural Language Processing API. The website allows user to type in any url containing an article or a blog, and with the help of MeaningCloud API analyse the sentiment of it through getting insight about the author's emotions and perspective.

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
> concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
> process and analyze large amounts of natural language data

## Building

The goal of this project was to practice with:

- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

This was my setup to get the project up and running:

- installed npm packages
- set up server for app to run on localhost: 8081
- installed webpack and webpack cli
- added babel
- installed html webpack plugin
- installed clean webpack plugin
- installed webpack dev server
- installed sass loaders: style-loader node-sass css-loader sass-loader
- set up the MeaningCloud API
- signed up for an API key
- set up service workers

## Dependencies

- HTML
- CSS
- SASS
- Javascript
- NodeJS
- Express
- Webpack
- MeaningCloud API used

## Installation

To improve if npm is installed (via Terminal).
node -v with version is v12.13.0

1. Go to the projekt folder and extract the project
   cd <folder>

2. Install the loaders and plugins
   npm i

3. Log in for the API Key at meaningcloud.com

   1. Install dotenv package
      npm install dotenv
   2. Build a .env file in the root directory and fill in your Key:
      API_KEY=\***\*\*\*\*\*\*\***\*\*\***\*\*\*\*\*\*\***

4. Start the projekt
   npm run build-dev | Build project
   npm start | Run project

5. Open the browser on http://localhost:8080/
