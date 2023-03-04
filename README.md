# RS-films

[RS films](http://rs-films22q3.ru/) is a free online cinema app with lots of features. This project was created as a final task (RS Clone) on RS School course.

## Key features

- watch every movie, show, anime, trailer that is available on kinopoisk API
- save movies to bookmarks, custom folders or mark them as watched
- lists of best movies, shows. Track you progress on top 250 best
- custom YouTube player for trailers
- kids mode to restrict adult content (only 12+ content is available and special desing)
- light/dark theme
- responsive design (up to iphone SE support)
- registration / authorization (different content is available)
- user account and settings

## Screenshot
![image](https://user-images.githubusercontent.com/101424508/222893646-82655804-30aa-4774-8a98-4f61d7bd0d5e.png)

## Tech stack

### Backend

- node js
- typescript
- express
- mongoose, mongoDb

### Frontend

- typescript
- redux
- scss
- jest
- YouTube IFrame player API

## 3-rd party API

API Kinopoisk ([кinopoisk.dev](https://github.com/mdwitr0/kinopoiskdev))

## How run locally

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Alesia-Abaeva/rs-clone.git

# Go into the repository and install dependencies for backend
$ npm install

# Install dependencies for client side
$ cd client
$ npm install

# Go back to the root directory and start the project
$ cd ..
$ npm run dev
# For more commands read package.json
```
