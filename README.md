# Template Repo for MERN Fullstack v0.1.0
A work in progress.
## Stack Description
- Mongo Atlas
- Express
- React
- Node
### Example Endpoint
The example endpoint for the API is localhost:4242/things. You can hit this with curl for testing or do it with React. It is recommended to use [Axios](https://www.npmjs.com/package/axios) and therefore is installed, but you could equally use any package or the [FetchAPI](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
When getting data to hold in the state, the request goes into the componentDidMount() method of a stateful React component. See ./src/pages/Home.js for the example using Axios.
### React Router for Pages
Using react router, see ./src/pages/Home.js for the example stateful component.
## Installation Procedure
### Auth0 for user management
This app uses Auth0.com for its user authentication and backend API security.
See [Auth0 API Docs](https://auth0.com/docs/api/management/v2/) docs for more information
See [Calling an API](https://auth0.com/docs/quickstart/spa/react/02-calling-an-api) for details of how the backed is secured.
### Api Settings with .env
Your credentials need to go into a .env file in for the backend: ./express-api/.env
```
# Settings for the api
PORT=4242

# Mongo Atlas Settings
ATLAS_CREDENTIALS=<user>:<password>
ATLAS_URL=<your subdomain>.mongodb.net/

# Redis Enterprise Cloud Settings
REDIS_HOST=<subdomain>.redislabs.com
REDIS_PORT=<port>
REDIS_PASSWORD=<pass>

# JWT & other Auth Settings
JWT_KEY=vulnerableKey

# Auth0 credentials for securing private endpoints
AUTH0_MGMT_API_ACCESS_TOKEN=V0ZTp1c2VyX2N1c3R...
AUTH0_API_URI=https://<subdomain assigned by Auth0>.auth0.com/api/v2/
```
### React Auth0 Configuration File
Create a file in the client folder `./src/auth0_config.json`, that looks like this:
```javascript
{
  "domain": "<subdomain assigned by Auth0>.auth0.com",
  "clientId": "<get_the_client_id_from_the_auth0_management_site>"
}
```
### NPM Install & Start
Run this command in both express-api and react-client directories
```bash
> npm i && npm start
```
## Test API
GET Request to get all the things in the mongodb
```bash
curl localhost:PORT/things
```
POST Request to make a new thing in the mongodb
```
curl -X POST localhost:PORT/things -H 'Content-Type: application/json' -d '{"thingName": "somenewthingy"}'
```
DELETE Request to delete one thing in the mongodb:
```bash
curl -X DELETE localhost:PORT/things/<thing._id>
```
## React <--> Express Connection

## Updating React App
#### Update react-scripts to remove vulnerability warnings*:
```
npm i --save --save-exact react-scripts@latest
```
\* [Check changelog for create-react-app](https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md)
#### Remove the optional dependencies warning from NPM for your piece of mind:
```
npm i fsevents@latest -f --save-optional
```

## Features
### Now with!
- Babel in the backend as well so you can use proper ES6 features such as import and export default class key words.
- Mongo Atlas connection script
- Create React App prebuilt
### Please request features - some would be nice features are:
- custom script to do create-react-app and hook it up to backend - so it keeps the install of React fresh
- other scripts for cooking custom stacks attributes
