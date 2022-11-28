import project, { ProjectInfo } from "../schemas/Project";

const ProjectDB = {
	findProjectById: async (project_id: string) => {
		const result = await project.findById(project_id);
		return result;
	},
	isProjectByName: async (name: string) => {
		const result = await project.findOne().where("name").equals(name);
		console.log(result);

		return result !== null ? true : false;
	},
	createProject: async (name: string, email: string, tel: string) => {
		const req: ProjectInfo = {
			name,
			email,
			tel
		};
		const result = await project.create(req);
		return result._id;
	}
};

export default ProjectDB;
