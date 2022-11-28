import mongoose, { Schema } from "mongoose";

export type CollectionInfo = {
	project_id: Schema.Types.ObjectId;
	collection_name: String;
	columns: {
		_type: String;
		_name: String;
		_length: Number;
	}[];
};
const projectCollectionSchema = new Schema({
	// _id 생략
	project_id: { type: Schema.Types.ObjectId, required: true, ref: "Project" },
	collection_name: { type: String, required: true, unique: true },
	columns: [
		new Schema({
			_type: { type: String, required: true },
			_name: { type: String, required: true },
			_length: Number
		})
	]
});
export default mongoose.model<CollectionInfo & mongoose.Document>("ProjectCollection", projectCollectionSchema);
