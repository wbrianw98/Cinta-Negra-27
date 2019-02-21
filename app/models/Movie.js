const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MoiveSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	category: {
		type:String,
        enum:['COMEDIA','DRAMA','TERROR', 'ACCION'],
        required:true
	},
	author: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
	available: {
		type: Boolean,
		default: true
	},
	anio:String,
    sinopsis:String,
    duracion:{
        type:Number,
        default:90
    }
}, { "collection": "movie", "timestamps": true });

mongoose.Types.ObjectId.prototype.valueOf = function () {
	return this.toString();
};

module.exports = mongoose.model("movie", PeliculaSchema);