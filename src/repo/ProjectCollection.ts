import projectCollection from "../schemas/ProjectCollection";

const ProjectCollectionDB = {
	findProjectCollectionById: async (collectionId: string) => {
		const result = await projectCollection.findById(collectionId);
		return result;
	},
	createProjectCollection: async (req: {
		project_id: String;
		collection_name: String;
		columns: { _name: String; _type: String; _length: Number }[];
	}) => {
		const { project_id, collection_name, columns } = req;
		const result = await projectCollection.create({ project_id, collection_name, columns });
		return result._id;
	}
};

export default ProjectCollectionDB;
