import mongoose, { Schema } from "mongoose";

export type ProjectInfo = {
	name: String;
    email: String;
    tel: String;
};
const projectSchema = new Schema({
	// _id 생략
	name: {
		type: String,
		require: true,
		unique: true
	},
	email: {
        type: String,
    },
    tel: {
        type: String
    },
});

export default mongoose.model<ProjectInfo & mongoose.Document>("Project", projectSchema);
