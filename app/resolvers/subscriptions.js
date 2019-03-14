// const CHANELS = require("../utils/constants/chanels");
const NEWMOVIE = "NEWMOVIE"

const newMovie = {
    subscribe: (paren, args, {pubsub}) => {
        // return pubsub.asyncIterator(CHANELS.NEW_POSTS)
        return pubsub.asyncIterator(NEWMOVIE)
    }
}

module.exports = {
    newMovie
}