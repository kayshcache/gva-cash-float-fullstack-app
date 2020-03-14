# Template Repo for MERN Fullstack v0.1.0
A work in progress.
## Stack Description
- Mongo Atlas
- Express
- React
- Node
### Example Endpoint
The example endpoint for the API is http://127.0.0.1:4242/things. You can hit this with curl for testing or do it with React. It is recommended to use [https://www.npmjs.com/package/axios](Axios) and therefore is installed, but you could equally use any package or the [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API](FetchAPI).
When getting data to hold in the state, the request goes into the componentDidMount() method of a stateful React component. See ./src/pages/Home.js for the example using Axios.
### React Router for Pages
Using react router, see ./src/pages/Home.js for the example stateful component.
## Installation Procedure
### App Settings with .env
Your credentials need to go into a .env file in for the backend: ./express-api/.env
```
ATLAS_CREDENTIALS=<user>:<password>
ATLAS_URL=<your subdomain>.mongodb.net/
PORT=4242
JWT_KEY=vulnerableKey
```
### NPM Install & Start
Run this command in both express-api and react-client directories
```bash
> npm i && npm start
```
### React <--> Express Connection

## Features
### Now with!
- Babel in the backend as well so you can use proper ES6 features such as import and export default class key words.
- Mongo Atlas connection script
- Create React App prebuilt
### Please request features - some would be nice features are:
- custom script to do create-react-app and hook it up to backend - so it keeps the install of React fresh
- other scripts for cooking custom stacks attributes
