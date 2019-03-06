const Movie = require("../models/Movie");

const createMovie = (data) => {
    return Movie.create(data)
}

const deleteMovieById = (id) => {
    return Movie.findByIdAndUpdate({_id: id, is_active:true}, {$set:{is_active:false}}, {new: true});
}

const getMovieById = (id) =>{
    return Movie.findById({_id: id, is_active: true})
}

const getAllMovies = () =>{
    return Movie.find({is_active:true});
}

const updateMoviebyId = (id, data) => {
    return Movie.findByIdAndUpdate(id,{$set: data}, {new: true})
}

module.exports = {
    createMovie,
    deleteMovieById,
    getAllMovies,
    getMovieById,
    updateMoviebyId
}