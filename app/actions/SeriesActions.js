const Series = require("../models/Series");

const createSeries = (data) => {
    return Series.create(data)
}

const deleteSerieById = (id) => {
    return Series.findByIdAndUpdate({_id: id, is_active:true}, {$set:{is_active:false}}, {new: true});
}

const getSerieById = (id) =>{
    return Series.findById({_id: id, is_active: true})
}

const getAllSeries = () =>{
    return Series.find({is_active:true});
}

const updateSeriebyId = (id, data) => {
    return Series.findByIdAndUpdate(id,{$set: data}, {new: true})
}

module.exports = {
    createSeries,
    deleteSerieById,
    getAllSeries,
    getSerieById,
    updateSeriebyId
}