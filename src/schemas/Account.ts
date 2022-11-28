import mongoose, { Schema } from "mongoose";

export type AccountInfo = {
	_id: Schema.Types.ObjectId;
	username: String;
	password: String;
	name: String;
	authority_cd: String;
	access_projects: String[];
};
const accountSchema = new Schema({
	// _id 생략
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	role_cd: { type: String, required: true, ref: "Authority" },
	access_projects: [String]
});

export default mongoose.model<AccountInfo & mongoose.Document>("Account", accountSchema);
