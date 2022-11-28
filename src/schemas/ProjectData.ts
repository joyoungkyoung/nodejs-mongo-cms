import mongoose, { Schema } from "mongoose";

export type DataInfo = {
	_id: Schema.Types.ObjectId;
	proejct_id: Schema.Types.ObjectId;
	collection_id: Schema.Types.ObjectId;
	values: {[key: string]: String | Number};
};

const projectDataSchema = new Schema({
	// _id 생략
	project_id: { type: Schema.Types.ObjectId, required: true, ref: "Project" },
	collection_id: { type: Schema.Types.ObjectId, required: true, ref: "ProjectCollection" },
	values: { type: Schema.Types.Map, of: Schema.Types.Mixed }
	//doc.markModified()
});

export default mongoose.model<DataInfo & mongoose.Document>("ProjectData", projectDataSchema);
