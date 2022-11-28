import ProjectData from "../schemas/ProjectData";

const ProjectDataDB = {
	createProjectData: async (req: {
		project_id: String;
		collection_id: String;
		values: { [key: string]: String | Number };
	}) => {
		const { project_id, collection_id, values } = req;
		const result = await ProjectData.create({ project_id, collection_id, values });
		
        return result._id;
	}
};

export default ProjectDataDB;
