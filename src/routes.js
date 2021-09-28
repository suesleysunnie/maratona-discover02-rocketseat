const express = require('express');
const routes = express.Router();
const views = __dirname + '/views/';

const profile = {
    "name": "Suesley Sunniê",
    "avatar": "https://avatars.githubusercontent.com/u/68163716?s=400&u=f2218f87b8e4c942ffc49a7a922a1012014148c3&v=4",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4
}

routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", { profile }))

module.exports = routes;