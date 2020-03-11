# Template Repo for MERN Fullstack v0.1.0
A work in progress.
## Stack Description
- Mongo Atlas
- Express
- React
- Node
## Installation Procedure
### App Settings with .env
Your credentials need to go into a .env file in for the backend:
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
## Features
### Now with!
- Babel in the backend as well so you can use proper ES6 features such as import and export default class key words.
- Mongo Atlas connection script
- Create React App prebuilt
### Please request features - some would be nice features are:
- custom script to do create-react-app and hook it up to backend - so it keeps the install of React fresh
- other scripts for cooking custom stacks attributes
