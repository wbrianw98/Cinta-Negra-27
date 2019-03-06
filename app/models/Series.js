const mongoose = require('mongoose');
const Schema = mongoose.Schema

const SerieSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    seasson:{
        type:String,
        required:true
    },
    episodes:{
        type:String,
        required:true,
    },
    categories: {
		type:String,
        enum:['COMEDIA','DRAMA','TERROR', 'ACCION'],
        required:true
	},
    sinopsis:{
        type:String,
        required:true
    },    
    director: {
        type: String,
        required: true
    },
    is_active: {
		type: Boolean,
		default: true
	},
    video:{
        type:String
    }
});

mongoose.Types.ObjectId.prototype.valueOf = function () {
	return this.toString();
};

module.exports =  mongoose.model('Series', SerieSchema);