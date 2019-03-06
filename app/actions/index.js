const authActions = require("./authAction");
const userActions = require("./userActions");
const MovieActions = require("./MoiveActions");
const SeriesActions = require("./SeriesActions");

module.exports = {
    ...authActions,
    ...userActions,
    ...MovieActions,
    ...SeriesActions
}