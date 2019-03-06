const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MoiveSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	duration:{
        	type:Number
	},
	categories: {
		type:String,
        	enum:['COMEDIA','DRAMA','TERROR', 'ACCION'],
        	required:true
	},
	sinopsis:{
		type:String
	},
	is_active: {
		type: Boolean,
		default: true
	},
	cover:{
		type:String
	},
	movie_url:{
		type:String
	},
	director: {
		type: String,
		required: true
	}
}, { "collection": "movie", "timestamps": true });

mongoose.Types.ObjectId.prototype.valueOf = function () {
	return this.toString();
};

module.exports = mongoose.model("movie", MoiveSchema);