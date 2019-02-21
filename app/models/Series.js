const mongoose =  require('mongoose');
const Schema = mongoose.Schema

const SerieSchema = new Schema({
    "title":{
        type:String,
        required:true
    },
    "seasson":{
        type:String,
        required:true
    },
    "chapter":{
        type:String,
        required:true,
    },
    "sinopsis":{
        type:String,
        required:true
    },      
    "poster":{
        type:String,
    },    
    "video":{
        type:String,
        required:true
    }
});

module.exports =  mongoose.model('Series', SerieSchema);