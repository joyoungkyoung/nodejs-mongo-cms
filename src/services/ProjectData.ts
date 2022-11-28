import { ResError, ResponseFailed, ResponseSuccess, SystemError } from "../handler/Response";
import { Request, Response } from "express";
import ProjectDB from "../repo/Project";
import ProjectCollectionDB from "../repo/ProjectCollection";

export const createProjectData = async (req: Request, res: Response) => {
	const { collectionId } = req.body;
	try {
		const project = await ProjectCollectionDB.findProjectCollectionById(collectionId);
		if (!project) {
			return ResponseFailed(res, ResError.NOT_FOUND_DATA);
		}

		const data: any = await ProjectCollectionDB.createProjectCollection({
			project_id: projectId,
			collection_name: collectionName,
			columns: columnArr,
			project_name: project.name
		});
		return ResponseSuccess(res, data);
	} catch (e: any) {
		SystemError(res, e);
	}
};
