# Busy Parent Buddy

Welcome to my project! This is a todo list app called Busy Parent Buddy, made using JavaScript and React frameworks. It allows users to quickly and easily add tasks to corresponding events. With this app, users can effortlessly manage their tasks and events, helping them stay organized and on top of their to-do list. I hope you enjoy this project and look forward to your contributions! 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    
## Tech Stack

**Client:** ReactJS, CSS/SaSS 

**Server:** Node, Express, MySQL2

## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```


## Run Locally

Clone the project
(Frontend Repo)
Frontend name: Client 

(Backend Repo)
Backend name: Server

```bash
  gh repo clone alextapia1/capstone-project

  gh repo clone alextapia1/capstone-project-api
```

Go to the project directory

```bash
  cd my-project client
   cd my-project server
```

Install dependencies 
Frontend

```
  
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.3.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.10.0",
    "react-scripts": "5.0.1",
    "sass": "^1.60.0",
    "web-vitals": "^2.1.4"
  },
```

Install dependencies 
Backend

 "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "knex": "^2.4.2",
    "mysql2": "^3.2.0",
    "uuid": "^9.0.0"
  }


Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
server
PORT='8080'
CORS_ORIGIN='http://localhost:3000'
DB_LOCAL_DBNAME='capstone'
DB_LOCAL_USER='root'
DB_LOCAL_PASSWORD='rootroot'

client
REACT_APP_BASE_URL=http://localhost:8080

## Lessons Learned

What did you learn while building this project? 
Having to refactor my code multiple times to implement my vision, learning to follow my own plans, working with a database and using my own API, 
