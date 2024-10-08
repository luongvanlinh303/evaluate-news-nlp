# Udacity Project:

# Evaluate a news article with Natural Language Processing

## Project Objective

To build a News Article/ Blog Sentiment Analysis website using Natural Language Processing API. The website allows user to type in any url containing an article or a blog, and with the help of MeaningCloud API analyse the sentiment of it through getting insight about the author's emotions and perspective.

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
> concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
> Process and analyze large amounts of natural language data

## Building

The goal of this project was to practice with:

- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external URLs

This was my setup to get the project up and running:

- Installed npm packages
- Set up a server for the app to run on localhost: 8081
- Installed webpack and webpack cli
- Added babel
- Installed html webpack plugin
- Installed clean webpack plugin
- Installed webpack dev server
- Installed sass loaders: style-loader node-sass css-loader sass-loader
- Set up the MeaningCloud API
- Signed up for an API key
- Set up service workers

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

1. To improve if npm is installed (via Terminal).

   node -v with version v12.13.0

2. Go to the project folder and extract the project
   cd <folder>

3. Install the loaders and plugins
   npm i

4. Log in for the API Key at meaningcloud.com

   1. Install dotenv package
      npm install dotenv
   2. Build a .env file in the root directory and fill in your Key:
      API_KEY=\***\*\*\*\*\*\*\***\*\*\***\*\*\*\*\*\*\***

5. Start the project

   1. npm run build-dev | Build project with mode development
   2. npm run build-prod | Build project with mode production
   3. npm start | Run project

6. Open the browser on http://localhost:8080/
