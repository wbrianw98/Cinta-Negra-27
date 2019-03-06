const actions = require("../actions")

const prueba = (_, args, context, info) => {
    return "Hello world GraphQL"
}

const Users = (_, args, context, info) => {
    return actions.getAllUsers()
        .then(users => users)
        .catch(e => e)
}

const Movie = (_, args,context, info) =>{
    return actions.getAllMovies()
        .then(movies => movies)
        .catch(e => e)
}

const getMovieById = (_,args,context,info) => {
    return actions.getMovieById(args.id).then((movie) => {
        return movie.toObject();
    }).catch((err) => {
        throw err
    })
}

const Serie = (_, args,context, info) =>{
    return actions.getAllSeries()
        .then(Series => Series)
        .catch(e => e)
}

const getSerieById = (_,args,context,info) => {
    return actions.getSerieById(args.id).then((Series) => {
        return Series.toObject();
    }).catch((err) => {
        throw err
    })
}


module.exports = {
    prueba,
    Users,
    Movie,
    getMovieById,
    Serie,
    getSerieById
}