var mongoose = require( 'mongoose' );
var ObjectId = mongoose.Schema.ObjectId;

module.exports = mongoose.Schema( {
	first_name: String,
	last_name: String,
	reports: [ ObjectId ],
	age_range: String,
	locale: String,
	gender: String,
	link: String,
	timezone: Number,
	picture: String,
	user_name: String,
	user_names: [ String ],
	description: String,
	type: String,
	members: [ ObjectId ],
	comments: [ ObjectId ],
	attending: [ ObjectId ],
	fan_count: Number,
	is_comunity_page: Boolean,
	location: String,
	verified: Boolean,
	is_verified: Boolean,
	parent_page: ObjectId,
	events: [ ObjectId ],
	posts: [ ObjectId ],
} );