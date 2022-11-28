import mongoose, { Schema } from "mongoose";

export interface AuthorityInfo {
	_id: Schema.Types.ObjectId;
	role_cd: String;
	name: String;
}
const authoritySchema = new Schema({
	// _id 생략
	role_cd: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	}
});

export default mongoose.model<AuthorityInfo & mongoose.Document>("Authority", authoritySchema);
