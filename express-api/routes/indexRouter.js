import express from 'express';

/* GET index.html from the public directory
 * 
 * Could be used for a docs page for the API
 *
 * */
export default express.Router().get('/', (req, res) => res.render('index', { title: 'Docs' }));
